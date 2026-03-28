import Link from "next/link";

export default function Formulario() {
    return (
        <form className="p-8 md:p-10 space-y-8">
            <div className="grid grid-cols-1 gap-8">

                {/* Seleção de Cliente com Busca */}
                <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">
                        Selecione um cliente:
                    </label>
                    <div className="relative group">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-amber-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>

                        <input
                            type="text"
                            placeholder="Pesquise pelo nome ou CPF..."
                            className="w-full pl-14 pr-6 py-4 bg-slate-50 dark:bg-[#1F2636] border border-transparent dark:border-white/5 rounded-2xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-500"
                        />
                    </div>
                </div>

                {/* Seleção de Serviço */}
                <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">
                        Selecione o serviço:
                    </label>
                    <div className="relative">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-amber-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                        </div>
                        <select className="w-full pl-14 pr-6 py-4 bg-slate-50 dark:bg-[#1F2636] border border-transparent dark:border-white/5 rounded-2xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all text-sm text-slate-800 dark:text-slate-100 appearance-none cursor-pointer">
                            <option value="" className="dark:bg-[#1F2636]">Corte Degradê + Barba</option>
                            <option value="" className="dark:bg-[#1F2636]">Apenas Cabelo</option>
                            <option value="" className="dark:bg-[#1F2636]">Platinado</option>
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        </div>
                    </div>
                </div>

                {/* Data e Hora */}
                <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">
                        Data e Hora do Atendimento:
                    </label>
                    <div className="relative">
                        <input
                            type="datetime-local"
                            className="w-full px-6 py-4 bg-slate-50 dark:bg-[#1F2636] border border-transparent dark:border-white/5 rounded-2xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all text-sm text-slate-800 dark:text-slate-100 [color-scheme:dark]"
                        />
                    </div>
                </div>

                {/* Rodapé de Ações */}
                <div className="flex items-center justify-end gap-4 mt-4 pt-8 border-t border-slate-100 dark:border-white/5">
                    <Link
                        href="/agenda"
                        className="px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-red-500 transition-colors"
                    >
                        Cancelar
                    </Link>

                    <button
                        type="submit"
                        className="px-10 py-4 bg-amber-500 hover:bg-amber-600 dark:bg-amber-500 dark:hover:bg-amber-400 text-[#2B344B] font-black rounded-2xl transition-all shadow-lg shadow-amber-500/20 active:scale-95 text-[10px] uppercase tracking-[0.2em]"
                    >
                        Confirmar Agendamento
                    </button>
                </div>
            </div>
        </form>
    )
}
