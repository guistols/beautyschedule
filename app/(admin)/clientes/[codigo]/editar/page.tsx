'use client'
import { Cliente, ClienteMock } from "@/app/mock/cliente";
import Link from "next/link";
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ClientesForm from "../../components/ClientesForm";
import axios from "axios";

export default function EditarCliente() {

    const params = useParams();
    const router = useRouter();

    const codigo = Number(params.codigo);
    const [clientes, setClientes] = useState<Cliente | null>(null);

    useEffect(() => {
        buscarCliente()
    }, [codigo, router]);

    const buscarCliente = async () => {
        const clienteResult = await axios.get<Cliente>('http://localhost:8080/cliente/' + codigo);
        
        if (clienteResult.data) setClientes(clienteResult.data)
        else router.push("/clientes")
    }

    if (!clientes) return (
        <div className="p-8">
            Carregando dados...
        </div>
    )

    return (
        <div className="max-w-4xl mx-auto p-6 md:p-10 font-sans">
            {/* Cabeçalho de Navegação */}
            <div className="flex flex-col gap-6 mb-10">

                {/* Botão Voltar - Estilo Minimalista */}
                <Link
                    href="/clientes"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border border-red-500/20 rounded-xl transition-all active:scale-95 shadow-sm group w-fit"
                >
                    {/* Ícone da Seta menor */}
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

                    {/* Texto do Botão ainda menor */}
                    <span className="text-[9px] font-black uppercase tracking-[0.15em]">
                        Voltar
                    </span>
                </Link>

                {/* Título da Página com Badge de Indicação */}
                <div className="flex items-center gap-4">
                    <div className="h-12 w-2 bg-amber-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
                            Editar <span className="text-amber-500">Cliente #{codigo}</span>
                        </h1>
                    </div>
                </div>
            </div>
            {/* O seu Formulário entra aqui embaixo */}
            <ClientesForm clienteExistente={clientes} />
        </div>
    )
}