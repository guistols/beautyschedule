import Formulario from "../components/AgendaFormulario";

export default function NovaAgenda() {
    return (
        <div className="max-w-xl mx-auto p-10 bg-white dark:bg-slate-900/50 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 rounded-2xl my-12 font-sans transition-colors">

            {/* Header com Estética Adaptável */}
            <div className="mb-10 text-center md:text-left">
                <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-900 dark:text-amber-400">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span className="text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
                        Cadastre um novo agendamento
                    </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-md">
                    Organize sua agenda reservando horários exclusivos para seus clientes e serviços.
                </p>
            </div>

            {/* Aqui vai ficar o componente do formulário */}
            <Formulario></Formulario>
            
                {/* Botão de Ação - Destaque Amber no Dark Mode */}
                <button className="mt-4 w-full bg-slate-900 dark:bg-amber-500 hover:bg-slate-800 dark:hover:bg-amber-600 text-white dark:text-slate-950 font-semibold py-5 rounded-xl transition-all shadow-xl shadow-slate-900/20 active:scale-[0.98] uppercase text-xs tracking-[0.2em]">
                    Confirmar Agendamento
                </button>
            </div>
    );
}