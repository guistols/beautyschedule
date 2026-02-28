'use client'

export default function Header(){
    return (
    <header className="w-full bg-white border-b border-zinc-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Lado Esquerdo: Identificação do Barbeiro */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center border border-zinc-200">
              {/* SVG: User Icon (W3C Standard Path) */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-5 h-5 text-zinc-600"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Guilherme</span>
            </div>
          </div>

          {/* Lado Direito: Botão Sair */}
          <div className="flex items-center">
            <button 
              onClick={() => console.log('Saindo...')}
              className="group flex items-center gap-2 px-3 py-2 rounded-md text-zinc-500 hover:text-zinc-950 transition-colors duration-200"
              aria-label="Sair do sistema"
            >
              <span className="text-sm font-medium hidden sm:block">Sair</span>
              {/* SVG: Logout Icon (W3C Standard Path) */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-5 h-5 group-hover:translate-x-0.5 transition-transform"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}