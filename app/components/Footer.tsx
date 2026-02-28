export default function Footer() {
  // Captura o ano atual (2026) dinamicamente
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-50 border-t border-zinc-200 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo e Copyright */}
          <div className="flex items-center gap-3">
            {/* Ícone de Tesoura/Salão (SVG W3C Standard) */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5 text-zinc-400"
            >
              <circle cx="6" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <line x1="20" y1="4" x2="8.12" y2="15.88" />
              <line x1="14.47" y1="14.48" x2="20" y2="20" />
              <line x1="8.12" y1="8.12" x2="12" y2="12" />
            </svg>
            <p className="text-sm text-zinc-600 font-medium tracking-tight">
              Beauty Scheduler <span className="text-zinc-300 mx-2">•</span> © {currentYear}
            </p>
          </div>

          {/* Links de Navegação */}
          <nav className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200 font-medium"
            >
              Suporte
            </a>
            <a 
              href="#" 
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200 font-medium"
            >
              Termos de uso
            </a>
          </nav>

        </div>
      </div>
    </footer>
  );
}