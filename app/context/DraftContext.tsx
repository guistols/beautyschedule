'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import Cookies from 'js-cookie';

// Definimos a estrutura do que queremos salvar no rascunho
interface AgendaDraft {
    servicoId?: number;
    data?: string;

}

interface DraftContextType {
    draft: AgendaDraft | null;
    salvarProgresso: (dados: Partial<AgendaDraft>) => void;
    limparRascunho: () => void;
    temRascunho: boolean;
}

const DraftContext = createContext<DraftContextType | undefined>(undefined);

export function DraftProvider({ children }: { children: ReactNode }) {
    const [draft, setDraft] = useState<AgendaDraft | null>(null);

    // 1. Ao carregar o app, verifica se existe rascunho nos Cookies
    useEffect(() => {
        const saved = Cookies.get('agendamento_draft');
        if (saved) {
            setDraft(JSON.parse(saved));
        }
    }, []);

    // 2. Função para salvar o progresso (mergeando com o que já existe)
    const salvarProgresso = (novosDados: Partial<AgendaDraft>) => {
        setDraft((prev) => {
            const atualizado = { ...prev, ...novosDados };
            // Salva no cookie por 24 horas (ajuste conforme necessário)
            Cookies.set('agendamento_draft', JSON.stringify(atualizado), { expires: 1 });
            return atualizado;
        });
    };

    // 3. Limpa o rascunho após finalizar o agendamento com sucesso
    const limparRascunho = () => {
        Cookies.remove('agendamento_draft');
        setDraft(null);
    };

    const temRascunho = !!draft && Object.keys(draft).length > 0;

    return (
        <DraftContext.Provider value={{ draft, salvarProgresso, limparRascunho, temRascunho }}>
            {children}
        </DraftContext.Provider>
    );
}

export const useDraft = () => {
    const context = useContext(DraftContext);
    if (!context) throw new Error("useDraft deve ser usado dentro de um DraftProvider");
    return context;
};