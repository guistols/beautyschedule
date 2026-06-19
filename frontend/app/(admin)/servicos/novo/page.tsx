import Link from "next/link";
import ServicosForm from "../components/ServicosForm";

export default function NovoServico() {
    return (
        <div className="max-w-4xl mx-auto p-6 md:p-10 font-sans">
            {/* Cabeçalho de Navegação e Título */}
            <div className="flex flex-col gap-6 mb-10">

                {/* Botão Voltar Slim Red - Estilo Desgraça Games */}
                <Link
                    href="/servicos"
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
                    <span className="text-[9px] font-mono font-black uppercase tracking-[0.15em]">
                        Voltar
                    </span>
                </Link>

                {/* Título da Seção */}
                <div className="flex items-center gap-4">
                    {/* Marcador Lateral Âmbar */}
                    <div className="h-12 w-2 bg-amber-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.4)]"></div>

                    <div>
                        <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
                            Novo <span className="text-amber-500">Serviço</span>
                        </h1>
                    </div>
                </div>
            </div>

            {/* Formulário de Serviços */}
            <ServicosForm />
        </div>
    )
}