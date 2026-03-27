'use client'
import { Servico, ServicoMock } from "@/app/mock/servico";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Servicos() {

    const [servicos, setServicos] = useState<Servico[]>([])

    useEffect(() => {
        carregarServico();
    }, [])


    const carregarServico = async () => {
        try {
            const response = await axios.get<Servico[]>('http://localhost:8080/servico/listar');
            setServicos(response.data);
        } catch (error) {
            console.error(error)
        }
    }

    const handleAlterarStatus = async (servico: Servico) => {
        try {
            setServicos(servicosAtuais =>
                servicosAtuais.map(s => s.id === servico.id
                    ? new Servico(s.id, s.descricao, s.tempo, s.preco, s.status) : s))
        } catch (error) {
            alert("Erro ao editar")
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
                <div className="overflow-hidden rounded-3xl border border-slate-100 dark:border-white/5 bg-white dark:bg-[#2B344B] shadow-2xl shadow-black/5">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse table-fixed md:table-auto">
                            <thead>
                                <tr className="bg-slate-50/50 dark:bg-[#1F2636]/50 border-b border-slate-100 dark:border-white/5">
                                    <th className="px-6 py-4 text-[10px] font-mono font-black uppercase tracking-[0.2em] text-slate-400 w-20">Cod</th>
                                    <th className="px-6 py-4 text-[10px] font-mono font-black uppercase tracking-[0.2em] text-slate-400">Descrição</th>
                                    <th className="px-6 py-4 text-[10px] font-mono font-black uppercase tracking-[0.2em] text-slate-400 w-28 text-center">Tempo</th>
                                    <th className="px-6 py-4 text-[10px] font-mono font-black uppercase tracking-[0.2em] text-slate-400 w-32 text-right">Preço</th>
                                    <th className="px-6 py-4 text-[10px] font-mono font-black uppercase tracking-[0.2em] text-slate-400 w-28 text-center">Status</th>
                                    <th className="px-6 py-4 text-[10px] font-mono font-black uppercase tracking-[0.2em] text-slate-400 w-28 text-right">Ações</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                                {servicos.map((servico) => (
                                    <tr key={servico.id} className="group hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
                                        <td className="px-6 py-4 text-sm font-mono text-slate-400">
                                            #{servico.id}
                                        </td>

                                        <td className="px-6 py-4 min-w-[200px]">
                                            <div className="whitespace-normal break-words">
                                                <span className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-tight group-hover:text-amber-500 transition-colors">
                                                    {servico.descricao}
                                                </span>
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 text-center">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-[#1F2636] text-[11px] font-bold text-slate-600 dark:text-slate-300">
                                                {servico.tempo} min
                                            </span>
                                        </td>

                                        <td className="px-6 py-4 text-right">
                                            <span className="text-sm font-black text-amber-500 font-mono">
                                                R$ {servico.preco}
                                            </span>
                                        </td>

                                        <td className="px-6 py-4 text-center">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${servico.status
                                                    ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                                                    : 'bg-red-500/10 text-red-500 border border-red-500/20'
                                                }`}>
                                                {servico.status ? 'ATIVO' : 'INATIVO'}
                                            </span>
                                        </td>

                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={`/servicos/${servico.id}/editar`}
                                                    className="p-2 text-slate-400 hover:text-amber-500 hover:bg-amber-500/10 rounded-xl transition-all"
                                                    title="Editar"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                                                </Link>

                                                <button
                                                    onClick={() => handleAlterarStatus(servico)}
                                                    className={`p-2 rounded-xl transition-all ${servico.status
                                                            ? 'text-slate-400 hover:text-red-500 hover:bg-red-500/10'
                                                            : 'text-slate-400 hover:text-emerald-500 hover:bg-emerald-500/10'
                                                        }`}
                                                    title={servico.status ? "Inativar" : "Ativar"}
                                                >
                                                    {servico.status
                                                        ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="9" x2="15" y1="9" y2="15" /><line x1="15" x2="9" y1="9" y2="15" /></svg>
                                                        : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                                    }
                                                </button>
                                            </div>
                                        </td>
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