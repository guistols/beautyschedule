import { Servico, ServicoMock } from "@/app/mock/servico";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Servicos() {

    const [servicos, setServicos] = useState<Servico[]>([])

    useEffect(() => {
        carregarServico();
    }, [])


    const carregarServico = async () => {
        try {
            const dados = await ServicoMock.listarTodos();
            setServicos(dados);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="max-w-6xl mx-auto p-6 md:p-10 font-sans transition-colors">
            <div className="space-y-8">

                {/* Cabeçalho da Lista */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-slate-50 tracking-tighter uppercase italic">
                            Lista de <span className="text-amber-500">Serviços</span>
                        </h3>
                        <label className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-slate-500 mt-1 flex items-center gap-2">
                    // Tabela de Preços e Tempos
                        </label>
                    </div>

                    <Link
                        href="/servicos/novo"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 dark:bg-amber-500 dark:hover:bg-amber-400 text-[#2B344B] font-bold rounded-2xl transition-all shadow-lg shadow-amber-500/20 active:scale-95 group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
                            <path d="M12 5v14M5 12h14" />
                        </svg>
                        <span className="text-[10px] uppercase tracking-[0.2em]">Adicionar Serviço</span>
                    </Link>
                </div>

                {/* Card da Tabela */}
                <div>
                    <div className="overflow-x-auto">
                        <table>
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Descrição</th>
                                    <th>Tempo</th>
                                    <th>Preco</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {servicos.map((servico)=>(
                                    <tr key={servico.codigo}>
                                        <td></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}