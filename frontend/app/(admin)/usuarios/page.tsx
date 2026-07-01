'use client'
import { buscarListaUsuario } from "@/app/services/usuarioService";
import { Usuario } from "@/app/types/auth/auth";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Usuarios() {

    const [usuario, setUsuario] = useState<Usuario[]>([]);

    // Carregar a lista
    useEffect(() => {
        carregarUsuario();
    }, []);

    const carregarUsuario = async () => {
        try {
            const response = await buscarListaUsuario();
            setUsuario(response);
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
                            Lista de <span className="text-amber-500">usuários</span>
                        </h3>
                        <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Gerencie seus usuários</p>
                    </div>

                    <Link
                        href="/usuarios/novo"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 dark:bg-amber-500 dark:hover:bg-amber-400 text-[#2B344B] font-bold rounded-2xl transition-all shadow-lg shadow-amber-500/20 active:scale-95 group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-90">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        <span className="text-[10px] uppercase tracking-[0.2em] font-black">Novo Usuário</span>
                    </Link>
                </div>

                {/* Barra de Busca */}
                <div className="relative group w-full">
                    <input
                        type="search"
                        placeholder="Buscar por nome ou CPF..."
                        className="w-full pl-14 pr-6 py-4 bg-white dark:bg-[#1F2636] border border-slate-200 dark:border-white/5 rounded-2xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all text-sm text-slate-800 dark:text-slate-100 shadow-xl shadow-black/5"
                    />
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-amber-400 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </div>
                </div>

                {/* Tabela Estilizada */}
                <div className="overflow-hidden rounded-3xl border border-slate-100 dark:border-white/5 bg-white dark:bg-[#2B344B] shadow-2xl shadow-black/5">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50 dark:bg-[#1F2636]/50 border-b border-slate-100 dark:border-white/5">
                                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 w-24">Cod</th>
                                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Usuário</th>
                                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">CPF</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                                {usuario.map((u) => (
                                    <tr key={u.id} className="group hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
                                        <td className="px-6 py-4 text-sm font-medium text-slate-400">#{u.id}</td>
                                        <td className="px-6 py-4 text-sm font-semibold text-slate-800 dark:text-slate-100">{u.username}</td>
                                        <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{u.cpf}</td>
                                    </tr>
                                ))}

                                {usuario.length === 0 && (
                                    <tr>
                                        <td colSpan={3} className="px-6 py-20 text-center">
                                            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest italic">Nenhum usuário encontrado.</p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}