export default function Servicos(){
    return (
  <div className="max-w-xl mx-auto p-10 bg-white dark:bg-slate-900/50 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 rounded-2xl my-12 font-sans transition-colors">
    {/* Header com Ícone Adaptável */}
    <div className="mb-10 text-center md:text-left">
      <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
        {/* Ícone de Tesoura - Corrigido para Dark Mode */}
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-900 dark:text-amber-400">
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
          <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
          <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
        </svg>
        <span className="text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
          Cadastre seus serviços
        </span>
      </div>
      
      <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-md">
        Personalize seu catálogo de atendimento definindo descrição, valores e o tempo estimado para sua barbearia.
      </p>
    </div>

    <div className="flex flex-col gap-8">
      {/* Campo Descrição */}
      <div className="flex flex-col gap-2.5">
        <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
          Descrição do Serviço
        </label>
        <input 
          type="text" 
          placeholder="Ex: Corte Moderno + Barboterapia"
          className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-4 focus:ring-amber-500/10 dark:focus:ring-amber-400/5 focus:border-slate-900 dark:focus:border-amber-400 focus:bg-white dark:focus:bg-slate-800 transition-all text-slate-800 dark:text-slate-100 placeholder:text-slate-300 dark:placeholder:text-slate-600 font-medium"
        />
      </div>

      {/* Linha Dupla: Preço e Duração */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Campo Preço */}
        <div className="flex flex-col gap-2.5">
          <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            Preço R$
          </label>
          <div className="relative group">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 font-medium group-focus-within:text-amber-500 transition-colors">R$</span>
            <input 
              type="text" 
              placeholder="0,00"
              className="w-full pl-12 pr-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-4 focus:ring-amber-500/10 dark:focus:ring-amber-400/5 focus:border-slate-900 dark:focus:border-amber-400 focus:bg-white dark:focus:bg-slate-800 transition-all text-slate-800 dark:text-slate-100 placeholder:text-slate-300 dark:placeholder:text-slate-600 font-medium"
            />
          </div>
        </div>

        {/* Campo Duração */}
        <div className="flex flex-col gap-2.5">
          <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            Duração (minutos)
          </label>
          <input 
            type="text" 
            placeholder="45 min"
            className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-4 focus:ring-amber-500/10 dark:focus:ring-amber-400/5 focus:border-slate-900 dark:focus:border-amber-400 focus:bg-white dark:focus:bg-slate-800 transition-all text-slate-800 dark:text-slate-100 placeholder:text-slate-300 dark:placeholder:text-slate-600 font-medium"
          />
        </div>
      </div>

      {/* Botão de Ação - Estilo "Barber Gold" no Dark Mode */}
      <button className="mt-4 w-full bg-slate-900 dark:bg-amber-500 hover:bg-slate-800 dark:hover:bg-amber-600 text-white dark:text-slate-950 font-semibold py-5 rounded-xl transition-all shadow-xl shadow-slate-900/20 dark:shadow-none active:scale-[0.98] uppercase text-xs tracking-[0.2em]">
        Finalizar Cadastro
      </button>
    </div>
  </div>
);
}