'use client'
import { buscarListaAgenda } from "@/app/services/agendaService";
import { Agenda } from "@/app/types/agenda/Agenda";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface RootState {
    auth: {
        usuario: {
            id: number | null;
            nome: string;
        } | null;
        token: string;
    }
}
export default function Agendas() {

    const [agenda, setAgenda] = useState<Agenda[]>([]);
    const usuarioLogado = useSelector((state: RootState) => state.auth.usuario);

    useEffect(() => {
        if (!usuarioLogado?.id) return;

        carregarAgenda(usuarioLogado.id);
    }, [usuarioLogado?.id]);

    const carregarAgenda = async () => {
        try {
            const response = await buscarListaAgenda(id);
            setAgenda(response ?? []);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="max-w-4xl mx-auto p-6 md:p-10 font-sans">

            {/* Cabeçalho da Agenda - Adaptável */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 border-b border-slate-100/20 pb-8">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight flex items-center gap-3 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-900 dark:text-amber-400"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                        Sua agenda
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Gerencie seus compromissos para hoje.</p>
                </div>

                {/* Link de Navegação Estilizado como Botão */}
                <Link
                    href="/agenda/nova"
                    className="flex items-center justify-center gap-2 bg-slate-900 dark:bg-amber-500 hover:bg-slate-800 dark:hover:bg-amber-600 text-white dark:text-slate-950 px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-slate-200/20 active:scale-95 text-sm uppercase tracking-wider"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Novo agendamento
                </Link>
            </div>

            {/* Lista de Agendamentos */}
            <div className="space-y-4">
                {agenda.length === 0 ? (
                    <div className="text-center py-12 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl text-slate-500 dark:text-slate-400 text-sm">
                        Nenhum agendamento encontrado.
                    </div>
                ) : (
                    agenda.map((item) => {
                        // Trata as datas dinamicamente para alimentar o seu layout fixo
                        const dataObj = new Date(item.dataHora);
                        const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
                        const badgeMes = meses[dataObj.getMonth()];
                        const badgeDia = dataObj.getDate().toString().padStart(2, '0');
                        const horarioFormatado = dataObj.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

                        return (
                            /* Card de Agendamento - Estilo Glassmorphism para Dark Mode */
                            <div key={item.id} className="group bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">

                                <div className="flex items-start gap-5">
                                    {/* Badge de Data - Ajustada para Dark Mode */}
                                    <div className="h-14 w-14 rounded-full bg-slate-50 dark:bg-slate-800 flex flex-col items-center justify-center border border-slate-100 dark:border-slate-700 flex-shrink-0">
                                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tighter">{badgeMes}</span>
                                        <span className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-none">{badgeDia}</span>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <span className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-amber-400 transition-colors">
                                            Cliente: {item.clienteNome}
                                        </span>
                                        <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm">
                                            <span className="flex items-center gap-1">
                                                {item.servicoDesc}
                                            </span>
                                            <span className="text-slate-300 dark:text-slate-700">•</span>
                                            <span className="font-semibold text-slate-700 dark:text-slate-300">
                                                {item.preco?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                            </span>
                                        </div>
                                        <div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-tight">
                                            Status: Confirmado
                                        </div>
                                        <div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-tight">
                                            Data e hora: {horarioFormatado}h
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    )
}