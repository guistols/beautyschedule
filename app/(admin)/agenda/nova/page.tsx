import Link from "next/link";
import AgendaForm from "../components/AgendaForm";


export default function NovaAgenda() {
    return (
        <div className="max-w-4xl mx-auto p-6 md:p-10 font-sans">
        {/* Cabeçalho de Edição de Agenda */}
        <div className="flex flex-col gap-6 mb-10">
            
            {/* Botão Voltar Slim Red */}
            <Link 
                href="/agenda" 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border border-red-500/20 rounded-xl transition-all active:scale-95 shadow-sm group w-fit"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:-translate-x-0.5"
                >
                    <path d="m15 18-6-6 6-6" />
                </svg>
                <span className="text-[9px] font-black uppercase tracking-[0.15em]">
                    Voltar
                </span>
            </Link>

            {/* Título com Ícone de Calendário */}
            <div className="flex items-center gap-4">
                <div className="h-12 w-2 bg-amber-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
                <div>
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
                        Novo <span className="text-amber-500">Agendamento</span>
                    </h1>
                    <div className="flex items-center gap-2 mt-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-medium">
                            Disponibilidade em tempo real
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Formulário da Agenda */}
        <div className="bg-white dark:bg-[#2B344B] rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-2xl shadow-black/10 overflow-hidden">
            <AgendaForm />
        </div>
    </div>
    );
}