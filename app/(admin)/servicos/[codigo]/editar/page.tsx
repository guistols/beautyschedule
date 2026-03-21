'use client'
import { Servico, ServicoMock } from "@/app/mock/servico";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ServicosForm from "../../components/ServicosForm";
import { Unbounded } from "next/font/google";



export default function EditarServico() {
    const params = useParams();
    const router = useRouter();

    const codigo = Number(params.codigo)
    const [servico, setServicos] = useState<Servico | null>(null);

    useEffect(() => {
        buscarServico();
    }, []);

    const buscarServico = async () => {
        const servicoResult = await ServicoMock.buscarId(codigo);

        if (servicoResult) setServicos(servicoResult)
        else router.push("/servicos")

        if (!servico) return (
            <div className="p-8">
                Carregando dados...
            </div>
        )
    }

    return (
        <div>
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
            </div>

            <ServicosForm servicoExistente={servico} />
        </div>
    )
}