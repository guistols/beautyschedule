import Link from "next/link";

export default function Agenda() {
    return (
  <div className="max-w-4xl mx-auto p-6 md:p-10 font-sans">
    
    {/* Cabeçalho da Agenda - Adaptável */}
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 border-b border-slate-100/20 pb-8">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight flex items-center gap-3 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-900 dark:text-amber-400"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Sua agenda
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Gerencie seus compromissos para hoje.</p>
      </div>
      
      {/* Link de Navegação Estilizado como Botão */}
      <Link 
        href="/nova-agenda" 
        className="flex items-center justify-center gap-2 bg-slate-900 dark:bg-amber-500 hover:bg-slate-800 dark:hover:bg-amber-600 text-white dark:text-slate-950 px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-slate-200/20 active:scale-95 text-sm uppercase tracking-wider"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        Novo agendamento
      </Link>
    </div>

    {/* Lista de Agendamentos */}
    <div className="space-y-4">
      
      {/* Card de Agendamento - Estilo Glassmorphism para Dark Mode */}
      <div className="group bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
        
        <div className="flex items-start gap-5">
          {/* Badge de Data - Ajustada para Dark Mode */}
          <div className="h-14 w-14 rounded-full bg-slate-50 dark:bg-slate-800 flex flex-col items-center justify-center border border-slate-100 dark:border-slate-700">
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tighter">Out</span>
            <span className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-none">24</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-amber-400 transition-colors">
              Cliente: Carlos Eduardo Silva
            </span>
            <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm">
              <span className="flex items-center gap-1">
                Corte Degradê
              </span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="font-semibold text-slate-700 dark:text-slate-300">R$ 55,00</span>
            </div>
            <div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-tight">
               Data e hora: 14:30h
            </div>
          </div>
        </div>

        {/* Ações do Card - Cores de Contraste */}
        <div className="flex items-center gap-2 border-t border-slate-50 dark:border-slate-800 md:border-t-0 pt-4 md:pt-0">
          <button className="flex-1 md:flex-none px-4 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors text-sm font-bold border border-transparent">
            Editar
          </button>
          <button className="flex-1 md:flex-none px-4 py-2.5 text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition-colors text-sm font-bold">
            Excluir
          </button>
        </div>
      </div>

    </div>
  </div>
);
}