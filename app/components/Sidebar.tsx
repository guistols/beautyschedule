import Link from "next/link";

export function Sidebar() {
    return (
        <aside className="w-64 h-screen bg-[#2B344B] border-r border-[#1F2636]/50 flex flex-col transition-all duration-300">

            {/* Logo / Branding - Apenas Texto */}
            <div className="p-10 mb-6 text-center">
                <span className="flex flex-col text-2xl font-black uppercase italic tracking-tighter leading-none">
                    <span className="text-white">Beauty</span>
                    <span className="text-amber-400">Scheduler</span>
                </span>
            </div>

            {/* Navegação Principal */}
            <nav className="flex-1 px-6 space-y-4">
                <Link
                    href="/agenda"
                    className="block px-6 py-4 rounded-2xl text-slate-400 hover:text-white hover:bg-white/5 transition-all group"
                >
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-amber-500 transition-colors">Agenda</span>
                </Link>

                <Link
                    href="/cliente"
                    className="block px-6 py-4 rounded-2xl text-slate-400 hover:text-white hover:bg-white/5 transition-all group"
                >
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-amber-500 transition-colors">Clientes</span>
                </Link>

                <Link
                    href="/servicos"
                    className="block px-6 py-4 rounded-2xl text-slate-400 hover:text-white hover:bg-white/5 transition-all group"
                >
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-amber-500 transition-colors">Serviços</span>
                </Link>
            </nav>
        </aside>
    );

}