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

    <div className="flex flex-col gap-8">

      {/* Pesquisa de Cliente - Estilo Glassmorphism */}
      <div className="flex flex-col gap-2.5">
        <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
          Pesquisar e Selecionar Cliente:
        </label>
        <div className="relative group">
          <input
            list="clientes-list"
            type="text"
            placeholder="Digite o nome do cliente..."
            className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-4 focus:ring-amber-500/10 dark:focus:ring-amber-400/5 focus:border-slate-900 dark:focus:border-amber-400 focus:bg-white dark:focus:bg-slate-800 transition-all text-slate-800 dark:text-slate-100 placeholder:text-slate-400 font-medium [&::-webkit-calendar-picker-indicator]:opacity-0"
          />

          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-focus-within:text-slate-900 dark:group-focus-within:text-amber-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>

          <datalist id="clientes-list">
            <option value="Exemplo nome cliente 1" />
            <option value="Exemplo nome cliente 2" />
            <option value="Carlos Eduardo Silva" />
          </datalist>
        </div>
      </div>

      {/* Seleção de Serviço */}
      <div className="flex flex-col gap-2.5">
        <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
          Selecione o serviço desejado:
        </label>
        <div className="relative group">
          <select className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-slate-900 dark:focus:border-amber-400 focus:bg-white dark:focus:bg-slate-800 transition-all text-slate-800 dark:text-slate-100 appearance-none cursor-pointer">
            <option>Qual serviço será realizado?</option>
            <option>Corte Degradê</option>
            <option>Barba Clássica</option>
          </select>
          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-focus-within:text-amber-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
          </div>
        </div>
      </div>

      {/* CAMPO STATUS */}
      <div className="flex flex-col gap-2.5">
        <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
          Status do Agendamento:
        </label>
        <div className="relative group">
          <select className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-slate-900 dark:focus:border-amber-400 focus:bg-white dark:focus:bg-slate-800 transition-all text-slate-800 dark:text-slate-100 appearance-none cursor-pointer font-medium">
            <option className="bg-white dark:bg-slate-800 text-amber-600 dark:text-amber-400">● Pendente</option>
            <option className="bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400">● Confirmado</option>
            <option className="bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400">● Em andamento</option>
          </select>
          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-focus-within:text-amber-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
          </div>
        </div>
      </div>

      {/* Data e Hora */}
      <div className="flex flex-col gap-2.5">
        <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
          Data e hora:
        </label>
        <input
          type="datetime-local"
          className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-slate-900 dark:focus:border-amber-400 focus:bg-white dark:focus:bg-slate-800 transition-all text-slate-800 dark:text-slate-100 [color-scheme:light] dark:[color-scheme:dark]"
        />
      </div>

      {/* Botão de Ação - Destaque Amber no Dark Mode */}
      <button className="mt-4 w-full bg-slate-900 dark:bg-amber-500 hover:bg-slate-800 dark:hover:bg-amber-600 text-white dark:text-slate-950 font-semibold py-5 rounded-xl transition-all shadow-xl shadow-slate-900/20 active:scale-[0.98] uppercase text-xs tracking-[0.2em]">
        Confirmar Agendamento
      </button>
    </div>
  </div>
);
}