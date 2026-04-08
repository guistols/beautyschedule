'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import Cookies from 'js-cookie';

// Definimos a estrutura do que queremos salvar no rascunho
interface ClienteDraft {
    nome: string;
    cpf: string;
    telefone: string
}

interface ClientDraftContextType {
    draft: ClienteDraft | null;
    salvarProgresso: (dados:ClienteDraft) => void;
    limparRascunho: () => void;
    temRascunho: boolean;
}

const DraftContext = createContext<ClientDraftContextType | undefined>(undefined);

export function DraftProvider({ children }: { children: ReactNode }) {
    const [draft, setDraft] = useState<ClienteDraft | null>(null);
    const dataExpiracao = new Date();
    
    dataExpiracao.setMinutes(dataExpiracao.getMinutes() + 1);

    // 1. Ao carregar o app, verifica se existe rascunho nos Cookies
    useEffect(() => {
        const saved = Cookies.get('cliente_draft');
        if (saved) {
            setDraft(JSON.parse(saved));
        }
    }, []);
    
    // 2. Função para salvar o progresso (mergeando com o que já existe)
    const salvarProgresso = (novosDados: ClienteDraft) => {
        debugger
        setDraft((prev) => {
            const atualizado = { ...prev, ...novosDados };
            // Salva no cookie por 1 minuto 
            Cookies.set('cliente_draft', JSON.stringify(atualizado), { expires:  dataExpiracao});
            return atualizado;
        });
    };

    // 3. Limpa o rascunho após finalizar o agendamento com sucesso
    const limparRascunho = () => {
        Cookies.remove('cliente_draft');
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