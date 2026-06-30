'use client'
import { buscarListaCliente } from "@/app/services/clienteService";
import { buscarListaServico } from "@/app/services/servicoService";
import { Cliente } from "@/app/types/cliente/cliente";
import { Servico } from "@/app/types/servico/servico";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { salvarAgenda } from "@/app/services/agendaService";
import { Agenda, AgendaFormProps } from "@/app/types/agenda/Agenda";

export default function AgendaForm({ agendaExistente }: AgendaFormProps) {

    const router = useRouter();

    const [agenda, setAgenda] = useState<Agenda>(
        agendaExistente || new Agenda(null, '',0, 0, 0,'',''));

    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [servicos, setServicos] = useState<Servico[]>([]);
    const [dataHora, setDataHora] = useState("");

    const [clienteSelecionado, setClienteSelecionado] = useState<Cliente | null>(null);
    const [pesquisa, setPesquisa] = useState("");
    const [mostrarDropdown, setMostrarDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const [servicoSelecionado, setServicoSelecionado] = useState<Servico | null>(null);
    const [pesquisaServico, setPesquisaServico] = useState("");
    const [mostrarDropdownServico, setMostrarDropdownServico] = useState(false);
    const dropdownServicoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        carregarCliente();
        carregarServico();
    }, []);

    useEffect(() => {
        document.addEventListener("mousedown", cliqueFora);
        document.addEventListener("mousedown", cliqueForaServico);
        return () => {
            document.removeEventListener("mousedown", cliqueFora);
            document.removeEventListener("mousedown", cliqueForaServico);
        };
    }, []);

    const carregarServico = async () => {
        try {
            const response = await buscarListaServico();
            setServicos(response);
        } catch (error) {
            console.error(error);
        }
    };

    const carregarCliente = async () => {
        try {
            const response = await buscarListaCliente();
            setClientes(response);
        } catch (error) {
            console.error(error);
        }
    };

    // Filtros de busca
    const clientesFiltrados = clientes.filter(cliente => {
        const termo = pesquisa.toLowerCase();
        const bateNome = cliente.nome?.toLowerCase().includes(termo);
        const bateCpf = cliente.cpf?.replace(/\D/g, "").includes(termo.replace(/\D/g, ""));
        return bateNome || bateCpf;
    });

    const servicosFiltrados = servicos.filter(servico =>
        servico.descricao?.toLowerCase().includes(pesquisaServico.toLowerCase())
    );

    function cliqueFora(event: MouseEvent) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setMostrarDropdown(false);
            setPesquisa("");
        }
    }

    function cliqueForaServico(event: MouseEvent) {
        if (dropdownServicoRef.current && !dropdownServicoRef.current.contains(event.target as Node)) {
            setMostrarDropdownServico(false);
            setPesquisaServico("");
        }
    }

    // Handlers de Seleção
    const handleSelecionarCliente = (cliente: Cliente) => {
        setClienteSelecionado(cliente);
        setMostrarDropdown(false);
        setPesquisa("");
    };

    const handleSelecionarServico = (servico: Servico) => {
        setServicoSelecionado(servico);
        setMostrarDropdownServico(false);
        setPesquisaServico("");
    };

    const handleSalvar = async (formData: FormData) => {
        const clienteId = Number(formData.get("clienteId"));
        const servicoId = Number(formData.get("servicoId"));
        const dataHoraValue = formData.get("dataHora") as string;

        // 3. Monta o payload correto para enviar para o Service
        const agendaParaSalvar = {
            id: agendaExistente ? agendaExistente.id : null,
            dataHora: dataHoraValue,
            clienteId: clienteId,
            servicoId: servicoId,
            clienteNome: "",
            servicoDesc: "",
            preco: 0
        };

        try {
            if (agendaExistente) {
                // await editarAgenda(agendaParaSalvar);
            } else {
                await salvarAgenda(agendaParaSalvar);
            }

            router.push("/agenda");
        } catch (error) {
            console.error("Erro ao salvar agendamento:", error);
        }
    }
    return (
        <form action={handleSalvar} className="p-8 md:p-10 space-y-8">
            <div className="grid grid-cols-1 gap-8">

                {/* Seleção de Cliente Dropdown com Busca Interna */}
                <div className="flex flex-col gap-2 relative" ref={dropdownRef}>
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">
                        Selecione um cliente:
                    </label>

                    <button
                        type="button"
                        onClick={() => setMostrarDropdown(!mostrarDropdown)}
                        className="w-full pl-14 pr-6 py-4 bg-slate-50 dark:bg-[#1F2636] border border-transparent dark:border-white/5 rounded-2xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all text-sm text-left flex justify-between items-center text-slate-800 dark:text-slate-100"
                    >
                        <div className="absolute left-5 top-[46px] text-amber-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>

                        <span>
                            {clienteSelecionado ? clienteSelecionado.nome : "Escolha um cliente da lista..."}
                        </span>

                        <svg className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mostrarDropdown ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {mostrarDropdown && (
                        <div className="absolute top-[85px] left-0 w-full bg-white dark:bg-[#1F2636] border border-slate-200 dark:border-white/5 rounded-2xl shadow-2xl p-3 z-50 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
                            <div className="relative mb-1">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                </div>
                                <input
                                    type="text"
                                    autoFocus
                                    value={pesquisa}
                                    onChange={(e) => setPesquisa(e.target.value)}
                                    placeholder="Digitar nome ou CPF para filtrar..."
                                    className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 text-xs text-slate-800 dark:text-slate-100"
                                />
                            </div>

                            <div className="max-h-52 overflow-y-auto space-y-0.5 pr-1">
                                {clientesFiltrados.length > 0 ? (
                                    clientesFiltrados.map((cliente) => (
                                        <button
                                            key={cliente.id}
                                            type="button"
                                            onClick={() => handleSelecionarCliente(cliente)}
                                            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-colors flex justify-between items-center ${clienteSelecionado?.id === cliente.id
                                                ? 'bg-amber-500 text-white font-medium'
                                                : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
                                                }`}
                                        >
                                            <span>{cliente.nome}</span>
                                            {cliente.cpf && (
                                                <span className={`text-[10px] font-mono ${clienteSelecionado?.id === cliente.id ? 'text-amber-100' : 'text-slate-400'}`}>
                                                    {cliente.cpf}
                                                </span>
                                            )}
                                        </button>
                                    ))
                                ) : (
                                    <div className="px-4 py-6 text-xs text-slate-400 text-center">
                                        Nenhum cliente corresponde à busca
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Seleção de Serviço Dropdown com Busca Interna */}
                <div className="flex flex-col gap-2 relative" ref={dropdownServicoRef}>
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">
                        Selecione o serviço:
                    </label>

                    <button
                        type="button"
                        onClick={() => setMostrarDropdownServico(!mostrarDropdownServico)}
                        className="w-full pl-14 pr-6 py-4 bg-slate-50 dark:bg-[#1F2636] border border-transparent dark:border-white/5 rounded-2xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all text-sm text-left flex justify-between items-center text-slate-800 dark:text-slate-100 relative"
                    >
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-amber-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                        </div>

                        <span>
                            {servicoSelecionado ? servicoSelecionado.descricao : "Escolha um serviço da lista..."}
                        </span>

                        <svg className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mostrarDropdownServico ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {mostrarDropdownServico && (
                        <div className="absolute top-[85px] left-0 w-full bg-white dark:bg-[#1F2636] border border-slate-200 dark:border-white/5 rounded-2xl shadow-2xl p-3 z-50 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
                            <div className="relative mb-1">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                </div>
                                <input
                                    type="text"
                                    autoFocus
                                    value={pesquisaServico}
                                    onChange={(e) => setPesquisaServico(e.target.value)}
                                    placeholder="Digitar nome do serviço para filtrar..."
                                    className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 text-xs text-slate-800 dark:text-slate-100"
                                />
                            </div>

                            <div className="max-h-52 overflow-y-auto space-y-0.5 pr-1">
                                {servicosFiltrados.length > 0 ? (
                                    servicosFiltrados.map((servico) => (
                                        <button
                                            key={servico.id}
                                            type="button"
                                            onClick={() => handleSelecionarServico(servico)}
                                            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-colors flex justify-between items-center ${servicoSelecionado?.id === servico.id
                                                ? 'bg-amber-500 text-white font-medium'
                                                : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
                                                }`}
                                        >
                                            <span>{servico.descricao}</span>
                                            <span className={`text-xs font-semibold ${servicoSelecionado?.id === servico.id ? 'text-amber-100' : 'text-emerald-600 dark:text-emerald-400'}`}>
                                                R$ {servico.preco.toFixed(2)}
                                            </span>
                                        </button>
                                    ))
                                ) : (
                                    <div className="px-4 py-6 text-xs text-slate-400 text-center">
                                        Nenhum serviço corresponde à busca
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Campo Data/Hora */}
                <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">
                        Data e Hora do Atendimento:
                    </label>
                    <div className="relative">
                        <input
                            type="datetime-local"
                            value={dataHora}
                            onChange={(e) => setDataHora(e.target.value)}
                            name="dataHora"
                            className="w-full px-6 py-4 bg-slate-50 dark:bg-[#1F2636] border border-transparent dark:border-white/5 rounded-2xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all text-sm text-slate-800 dark:text-slate-100 [color-scheme:dark]"
                        />
                    </div>
                </div>

                {/* Campo Status */}
                <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">
                        Status:
                    </label>
                    <div className="relative">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-amber-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                        </div>
                        <select className="w-full pl-14 pr-6 py-4 bg-slate-50 dark:bg-[#1F2636] border border-transparent dark:border-white/5 rounded-2xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all text-sm text-slate-800 dark:text-slate-100 appearance-none cursor-pointer">
                            <option value="CONFIRMADO" className="dark:bg-[#1F2636]">Confirmado</option>
                            <option value="PENDENTE" className="dark:bg-[#1F2636]">Pendente</option>
                            <option value="A_PAGAR" className="dark:bg-[#1F2636]">A Pagar</option>
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        </div>
                    </div>
                </div>

                {/* Botões do Formulário */}
                <div className="flex items-center justify-end gap-4 mt-4 pt-8 border-t border-slate-100 dark:border-white/5">
                    <Link
                        href="/agenda"
                        className="px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-red-500 transition-colors"
                    >
                        Cancelar
                    </Link>

                    <button
                        type="submit"
                        className="px-10 py-4 bg-amber-500 hover:bg-amber-600 dark:bg-amber-500 dark:hover:bg-amber-400 text-[#2B344B] font-black rounded-2xl transition-all shadow-lg shadow-amber-500/20 active:scale-95 text-[10px] uppercase tracking-[0.2em]"
                    >
                        Confirmar Agendamento
                    </button>
                </div>
            </div>

            <input type="hidden" name="clienteId" value={clienteSelecionado?.id || ""} />
            <input type="hidden" name="servicoId" value={servicoSelecionado?.id || ""} />
            <input type="hidden" name="dataHora" value={dataHora || ""} />
        </form>
    );
}