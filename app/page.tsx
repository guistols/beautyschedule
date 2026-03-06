import Link from "next/link";

export default function LandPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">

            {/* 1. SEÇÃO BANNER (HERO) - Identidade Amber aplicada */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-slate-900">

                {/* Imagem de Fundo com Filtro Dramático */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2070"
                        alt="Barbearia Premium"
                        className="w-full h-full object-cover opacity-30 grayscale-[50%]"
                    />
                    {/* Overlay Gradiente ajustado para a paleta Slate/Amber */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/60 to-slate-50 dark:to-slate-950"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
                    <div className="space-y-4">
                    
                        <h1 className="text-5xl md:text-7xl font-light text-slate-900 dark:text-white tracking-tight leading-tight">
                            O futuro da sua <br />
                            <span className="font-serif italic text-amber-600 dark:text-amber-500">Barbearia</span> é digital.
                        </h1>

                        <p className="max-w-xl mx-auto text-slate-600 dark:text-slate-300 text-lg md:text-xl font-light leading-relaxed">
                            Eleve o padrão do seu atendimento e organize sua agenda com a sofisticação que o seu talento exige.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Link href={"/usuarios"}
                            className="px-10 py-4 bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-950 font-bold rounded-2xl hover:bg-slate-800 dark:hover:bg-amber-400 transition-all shadow-2xl shadow-slate-900/20 dark:shadow-amber-900/20 inline-block text-center uppercase tracking-widest text-sm active:scale-95"
                        >
                            Cadastrar-se agora
                        </Link>


                    </div>
                </div>
            </section>

            {/* 2. SEÇÃO DE VALORES - Estilo Glassmorphism e Cores Sóbrias */}
            <section className="py-24 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900 transition-colors">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">

                        <div className="lg:col-span-4 grid grid-cols-1 gap-6">
                            {/* Card Agilidade */}
                            <div className="bg-slate-50 dark:bg-slate-900/40 p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800 shadow-sm space-y-4 group hover:border-amber-500/30 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-amber-600 dark:text-amber-400 border border-slate-100 dark:border-slate-700 shadow-inner">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                                </div>
                                <h3 className="text-slate-900 dark:text-slate-100 font-bold text-xl tracking-tight">Agilidade Premium</h3>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light text-base">
                                    Reduza o tempo de espera e elimine conflitos de horários com um sistema inteligente.
                                </p>
                            </div>

                            {/* Card Presença Digital */}
                            <div className="bg-slate-50 dark:bg-slate-900/40 p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800 shadow-sm space-y-4 group hover:border-amber-500/30 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-amber-600 dark:text-amber-400 border border-slate-100 dark:border-slate-700 shadow-inner">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                </div>
                                <h3 className="text-slate-900 dark:text-slate-100 font-bold text-xl tracking-tight">Presença Digital</h3>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light text-base">
                                    Tenha um link exclusivo para divulgar seus serviços diretamente nas redes sociais.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-8 space-y-6 lg:pl-10">
                            <h2 className="text-3xl md:text-4xl font-light text-slate-900 dark:text-white leading-tight">
                                Muito mais que uma agenda, <br />
                                <span className="text-amber-600 dark:text-amber-500 font-medium">um ecossistema para o seu negócio.</span>
                            </h2>
                            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg font-light leading-relaxed">
                                <p>
                                    Imagine eliminar as interrupções constantes no WhatsApp e as falhas de comunicação que geram cadeiras vazias. Nosso sistema foi projetado especificamente para o ritmo de uma barbearia de alto padrão.
                                </p>
                                <p className="text-slate-400 dark:text-slate-500 italic border-l-2 border-amber-500/30 pl-4">
                                    Foque na arte de cortar; deixe a burocracia do tempo conosco.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SEÇÃO FINAL (CTA) - Fundo Escuro com Detalhes Amber */}
            <section className="py-24 md:py-40 bg-slate-950 text-white relative overflow-hidden">
                {/* Glow de fundo âmbar em vez de indigo */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-900/20 rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/4"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8 leading-tight">
                        Sua arte merece uma <br />
                        <span className="font-semibold italic text-amber-500 underline decoration-amber-500/30 underline-offset-[12px]">experiência elevada.</span>
                    </h2>
                    <p className="text-slate-300 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed opacity-80">
                        Junte-se aos melhores especialistas da região e transforme a gestão do seu talento com a sofisticação do Beauty Scheduler.
                    </p>
                    <div className="mt-12 flex flex-col items-center gap-6">
                        <Link
                            href="/usuarios"
                            className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-12 py-4 rounded-2xl font-bold transition-all transform hover:scale-105"
                        >
                            COMEÇAR AGORA
                        </Link>
                        <div className="opacity-20">
                            <div className="w-px h-24 bg-gradient-to-b from-amber-500 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
