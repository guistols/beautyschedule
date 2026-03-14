'use client'
import { Cliente, ClienteMock } from "@/app/mock/cliente";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Clientes() {

    const [clientes, setClientes] = useState<Cliente[]>([]);

    //carregar a lista
    useEffect(() => {
        carregarCliente();
    }, []);

    //funcao pra trazer os clientes
    const carregarCliente = async () => {
        try {
            const dados = await ClienteMock.listarTodos();
            setClientes(dados);
        } catch (error) {
            console.error(error)
        }
    }
    
    const handleAlterarStatus = async (cliente:Cliente)=>{
        try{
            setClientes( clientesAtuais => 
                clientesAtuais.map(c=>c.codigo === cliente.codigo
                    ?new Cliente(c.codigo,c.nome,c.telefone,c.cpf,!c.ativo) : c))
        }catch(error){
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
                        Lista de <span className="text-amber-500">clientes</span>
                    </h3>
                    <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Gerencie sua base de contatos</p>
                </div>

                <Link
                    href="/clientes/novo"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 dark:bg-amber-500 dark:hover:bg-amber-400 text-[#2B344B] font-bold rounded-2xl transition-all shadow-lg shadow-amber-500/20 active:scale-95 group"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-90">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    <span className="text-[10px] uppercase tracking-[0.2em]">Novo Cliente</span>
                </Link>
            </div>

            {/* Barra de Busca */}
            <div className="relative group w-full">
                <input
                    type="search"
                    placeholder="Buscar por nome ou telefone..."
                    className="w-full pl-14 pr-6 py-4 bg-white dark:bg-[#1F2636] border border-slate-200 dark:border-white/5 rounded-2xl focus:outline-none focus:border-amber-400 transition-all text-sm text-slate-800 dark:text-slate-100 shadow-xl shadow-black/5"
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
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Cod</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Cliente</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Telefone</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Status</th>
                                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                            {clientes.map((cliente) => (
                                <tr key={cliente.codigo} className="group hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-slate-400">#{cliente.codigo}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-slate-900 dark:text-slate-100">{cliente.nome}</span>
                                            <span className="text-[10px] text-slate-400 font-medium tracking-wider">{cliente.cpf}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 font-medium">{cliente.telefone}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                                            cliente.ativo 
                                            ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' 
                                            : 'bg-red-500/10 text-red-500 border border-red-500/20'
                                        }`}>
                                            {cliente.ativo ? 'Ativo' : 'Inativo'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link 
                                                href={`/clientes/${cliente.codigo}/editar`}
                                                className="p-2 text-slate-400 hover:text-amber-500 hover:bg-amber-500/10 rounded-xl transition-all"
                                                title="Editar"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                                            </Link>
                                            <button 
                                                onClick={() => handleAlterarStatus(cliente)}
                                                className={`p-2 rounded-xl transition-all ${
                                                    cliente.ativo 
                                                    ? 'text-slate-400 hover:text-red-500 hover:bg-red-500/10' 
                                                    : 'text-slate-400 hover:text-emerald-500 hover:bg-emerald-500/10'
                                                }`}
                                                title={cliente.ativo ? "Inativar" : "Ativar"}
                                            >
                                                {cliente.ativo 
                                                    ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="9" x2="15" y1="9" y2="15"/><line x1="15" x2="9" y1="9" y2="15"/></svg>
                                                    : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                                }
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                            {clientes.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-6 py-20 text-center">
                                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest italic">Nenhum cliente encontrado.</p>
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