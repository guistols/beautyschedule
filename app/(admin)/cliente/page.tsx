export default function Cliente(){
    return (
  <div className="max-w-4xl mx-auto p-6 md:p-10 font-sans transition-colors">
    
    {/* SEÇÃO 1: FORMULÁRIO DE CADASTRO */}
    <div className="bg-white dark:bg-slate-900/50 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 rounded-2xl p-8 mb-12">
      <div className="mb-8 text-center md:text-left">
        <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-900 dark:text-amber-400">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="8.5" cy="7" r="4"></circle>
            <line x1="20" y1="8" x2="20" y2="14"></line>
            <line x1="17" y1="11" x2="23" y2="11"></line>
          </svg>
          <span className="text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            Cadastre seus clientes!
          </span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm">Adicione novos contatos à sua base de dados.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2.5">
          <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Nome do cliente:</label>
          <input 
            type="text" 
            placeholder="Nome completo"
            className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-slate-900 dark:focus:border-amber-400 transition-all text-slate-800 dark:text-slate-100 font-medium"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Telefone:</label>
          <input 
            type="text" 
            placeholder="(00) 00000-0000"
            className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-slate-900 dark:focus:border-amber-400 transition-all text-slate-800 dark:text-slate-100 font-medium"
          />
        </div>
      </div>
      
      <button className="mt-8 w-full md:w-auto md:px-12 bg-slate-900 dark:bg-amber-500 hover:bg-slate-800 dark:hover:bg-amber-600 text-white dark:text-slate-950 font-semibold py-4 rounded-xl transition-all uppercase text-xs tracking-widest">
        Salvar Cliente
      </button>
    </div>

    {/* SEÇÃO 2: LISTA E BUSCA */}
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">Lista de clientes</h3>
        <div className="relative group min-w-[300px]">
          <input 
            type="search" 
            placeholder="Buscar por nome ou telefone..."
            className="w-full pl-12 pr-5 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full focus:outline-none focus:border-amber-400 transition-all text-sm text-slate-800 dark:text-slate-100 shadow-sm"
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-amber-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
        </div>
      </div>

      {/* Card do Cliente (Exemplo de item da lista) */}
      <div className="group bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-amber-400/30 transition-all shadow-sm">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-amber-400 font-bold">
            CS
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 dark:text-slate-100">Carlos Silva</span>
            <span className="text-sm text-slate-500 dark:text-slate-400">(11) 98765-4321</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 border-t md:border-t-0 pt-3 md:pt-0">
          <button className="flex-1 md:flex-none px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
            Editar
          </button>
          <button className="flex-1 md:flex-none px-4 py-2 text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition-colors">
            Excluir
          </button>
        </div>
      </div>
    </div>
  </div>
);
}