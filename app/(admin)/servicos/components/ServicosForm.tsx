'use client'
import { Servico } from "@/app/mock/servico";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ServicoFormProps {
    servicoExistente ? : Servico 
}

export default function ServicosForm({ servicoExistente }: ServicoFormProps) {

    debugger;
    const [servicos, setServicos] = useState<Servico>(
        servicoExistente || new Servico(null, '', 0, 0, "ATIVO"));
    const router = useRouter();

    const handleChange = (campo: 'descricao' | 'tempo' | 'preco', valor: string) => {
        setServicos(prev =>
            new Servico(
                prev.id,
                campo === 'descricao' ? valor : prev.descricao,
                campo === 'tempo' ? Number(valor) : prev.tempo,
                campo === 'preco' ? Number(valor) : prev.preco,
                prev.status
            )
        )
    }

    const handleSalvar = async (formData: FormData) => {
        if (servicoExistente) {

            var response = await axios.put<number>('http://localhost:8080/servico/'+ servicoExistente.id ,servicos)

            if (response.status !== 200) {
                return;
            }

        } else {
            var response = await axios.post<number>('http://localhost:8080/servico/salvar', servicos)

            if (response.status !== 200) {
                return;
            }
        }
        
        router.push("/servicos")
    }

    return (
        <form action={handleSalvar} className="max-w-2xl mx-auto bg-white dark:bg-[#2B344B] p-8 md:p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-2xl shadow-black/10">

            <div className="space-y-8">
                {/* Título Interno */}
                <div className="mb-8">
                    <h2 className="text-xl font-black text-slate-900 dark:text-slate-50 tracking-tighter uppercase italic">
                        Novo <span className="text-amber-500">Serviço</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6">

                    {/* Campo Descrição */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-amber-500/80 dark:text-amber-500/60 ml-2">
                            Descrição do Serviço
                        </label>
                        <div className="relative group">
                            <input
                                required
                                value={servicos.descricao}
                                onChange={(e) => { handleChange('descricao', e.target.value) }}
                                type="text"
                                placeholder="Ex: Corte Degradê + Barba"
                                className="w-full px-6 py-4 bg-slate-50 dark:bg-[#1F2636] border border-transparent dark:border-white/5 rounded-2xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-500"

                            />
                        </div>
                    </div>

                    {/* Linha com Duração e Preço */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Campo Duração */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-amber-500/80 dark:text-amber-500/60 ml-2">
                                Duração (Minutos)
                            </label>
                            <div className="relative">
                                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                </div>
                                <input
                                    required
                                    value={servicos.tempo}
                                    onChange={(e) => { handleChange('tempo', e.target.value) }}
                                    type="number"
                                    placeholder="45"
                                    className="w-full pl-14 pr-6 py-4 bg-slate-50 dark:bg-[#1F2636] border border-transparent dark:border-white/5 rounded-2xl focus:outline-none focus:border-amber-400 transition-all text-sm text-slate-800 dark:text-slate-100"
                                />
                            </div>
                        </div>

                        {/* Campo Preço */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-amber-500/80 dark:text-amber-500/60 ml-2">
                                Preço (R$)
                            </label>
                            <div className="relative">
                                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-amber-500 font-bold text-xs">
                                    R$
                                </div>
                                <input
                                    required
                                    value={servicos.preco}
                                    onChange={(e) => { handleChange('preco', e.target.value) }}
                                    type="text"
                                    placeholder="0,00"
                                    className="w-full pl-12 pr-6 py-4 bg-slate-50 dark:bg-[#1F2636] border border-transparent dark:border-white/5 rounded-2xl focus:outline-none focus:border-amber-400 transition-all text-sm font-bold text-slate-800 dark:text-slate-100 placeholder:text-slate-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Ações do Formulário */}
                    <div className="flex items-center justify-end gap-4 mt-6 pt-6 border-t border-slate-100 dark:border-white/5">
                        <Link
                            href="/servicos"
                            className="px-6 py-3 text-[10px] font-mono font-black uppercase tracking-[0.2em] text-slate-400 hover:text-red-500 transition-colors"
                        >
                            Cancelar
                        </Link>

                        <button
                            type="submit"
                            className="px-10 py-4 bg-amber-500 hover:bg-amber-600 text-[#2B344B] font-black rounded-2xl transition-all shadow-lg shadow-amber-500/20 active:scale-95 text-[10px] uppercase tracking-[0.2em]"
                        >
                            Salvar Serviço
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}