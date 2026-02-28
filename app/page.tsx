import Link from "next/link";

export default function LandPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">

            {/* 1. SEÇÃO BANNER (HERO) - Com Imagem de Fundo e Overlay */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-slate-100 bg-slate-900">

                {/* Imagem de Fundo com Filtro */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2070"
                        alt="Barbearia Premium"
                        className="w-full h-full object-cover opacity-40"
                    />
                    {/* Overlay Gradiente para garantir leitura do texto */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-50"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
                    <div className="space-y-4">
                        <span className="inline-block text-cyan-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                            Beauty Scheduler
                        </span>

                        <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight leading-tight">
                            O futuro da sua <br />
                            <span className="font-serif italic text-cyan-400">Barbearia</span> é digital.
                        </h1>

                        <p className="max-w-xl mx-auto text-slate-200 text-lg md:text-xl font-light leading-relaxed">
                            Eleve o padrão do seu atendimento e organize sua agenda com a sofisticação que o seu talento exige.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Link
                            href="/login"
                            className="px-10 py-4 bg-indigo-600 text-white font-semibold rounded-2xl hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-900/50 inline-block text-center"
                        >
                            Cadastrar-se agora
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. SEÇÃO DE VALORES E DESCRIÇÃO - (Sem alterações conforme solicitado, mantendo o grid assimétrico) */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">

                        <div className="lg:col-span-4 grid grid-cols-1 gap-6">
                            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm space-y-4">
                                <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 border border-cyan-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                                </div>
                                <h3 className="text-slate-900 font-semibold text-xl tracking-tight">Agilidade Premium</h3>
                                <p className="text-slate-500 leading-relaxed font-light text-base">
                                    Reduza o tempo de espera e elimine conflitos de horários com um sistema inteligente.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm space-y-4">
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                </div>
                                <h3 className="text-slate-900 font-semibold text-xl tracking-tight">Presença Digital</h3>
                                <p className="text-slate-500 leading-relaxed font-light text-base">
                                    Tenha um link exclusivo para divulgar seus serviços diretamente nas redes sociais.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-8 space-y-6 lg:pl-10">
                            <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
                                Muito mais que uma agenda, <br />
                                <span className="text-indigo-600 font-medium">um ecossistema para o seu negócio.</span>
                            </h2>
                            <div className="space-y-4 text-slate-600 text-lg font-light leading-relaxed">
                                <p>
                                    Imagine eliminar as interrupções constantes no WhatsApp e as falhas de comunicação que geram cadeiras vazias. Nosso sistema de agendamento foi projetado especificamente para o ritmo de uma barbearia de alto padrão.
                                </p>
                                <p className="text-slate-400 italic">
                                    Foque na arte de cortar; deixe a burocracia do tempo conosco.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SEÇÃO FINAL (CTA) */}
            <section className="py-24 md:py-40 bg-indigo-950 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-900 rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/4"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8 leading-tight">
                        Sua arte merece uma <br />
                        <span className="font-semibold italic text-cyan-400 underline decoration-cyan-400/30 underline-offset-[12px]">experiência elevada.</span>
                    </h2>
                    <p className="text-indigo-200 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed opacity-80">
                        Junte-se aos melhores especialistas da região e transforme a gestão do seu talento com a sofisticação do Beauty Scheduler.
                    </p>
                    <div className="mt-12 flex justify-center opacity-20">
                        <div className="w-px h-24 bg-gradient-to-b from-cyan-400 to-transparent"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}
