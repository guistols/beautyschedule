export default function Footer() {
  // Captura o ano atual (2026) dinamicamente
  const currentYear = new Date().getFullYear();


  return (
    <footer className="w-full bg-[#2B344B] border-t border-[#1F2636]/50 py-12 mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo e Copyright - Cores de texto ajustadas para contraste */}
          <div className="flex items-center gap-3">
            {/* Ícone com o tom Amber para o contraste clássico */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-amber-400"
            >
              <circle cx="6" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <line x1="20" y1="4" x2="8.12" y2="15.88" />
              <line x1="14.47" y1="14.48" x2="20" y2="20" />
              <line x1="8.12" y1="8.12" x2="12" y2="12" />
            </svg>
            <p className="text-sm text-slate-200 font-semibold tracking-tight">
              Beauty Scheduler <span className="text-slate-500 mx-2">•</span> © {currentYear}
            </p>
          </div>

          {/* Links de Navegação */}
          <nav className="flex items-center gap-8">
            <a
              href="#"
              className="text-[10px] uppercase tracking-[0.2em] text-slate-300 hover:text-amber-400 transition-colors duration-200 font-black"
            >
              Suporte
            </a>
            <a
              href="#"
              className="text-[10px] uppercase tracking-[0.2em] text-slate-300 hover:text-amber-400 transition-colors duration-200 font-black"
            >
              Termos
            </a>
          </nav>

        </div>

        {/* Linha decorativa de saída - Ajustada para o novo fundo */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-[#1F2636] to-transparent opacity-70"></div>
      </div>
    </footer>
  );
}