'use client'
import { Cliente, ClienteMock } from "@/app/mock/cliente"
import { useState } from "react"
import Link from "next/link";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import axios from "axios";

// passar a prop para tratar e utilizar o mesmo formulario
interface ClienteFormProps {
    clienteExistente ? : Cliente
}

export default function ClientesForm({ clienteExistente }: ClienteFormProps) {

    //ele vai trazer o clienteExistente caso não seja para fazer um novo
    const [clientes, setClientes] = useState<Cliente>(
        clienteExistente || new Cliente(null, '', '', '', "ATIVO"))
    const router = useRouter();


    const handleChange = (campo: 'nome' | 'cpf' | 'telefone', valor: string) => {
        setClientes(prev =>
            new Cliente(

                prev.id,
                campo === 'nome' ? valor : prev.nome,
                campo === 'telefone' ? valor : prev.telefone,
                campo === 'cpf' ? valor : prev.cpf,
                prev.status
            )
        )
    }

    // salvar os dados do formulario
    const handleSalvar = async (formData: FormData) => {
        debugger;
        if (clienteExistente) {
            var response = await axios.put<number>('http://localhost:8080/cliente/' + clienteExistente.id, clientes)

            if (response.status !== 200) {
                return;
            }

            
        } else {
            var response = await axios.post<number>('http://localhost:8080/cliente/salvar', clientes)

            if (response.status !== 200) {
                return;
            }

        }


        router.push("/clientes")
    }

    return (
        <form action={handleSalvar} className="max-w-2xl mx-auto space-y-8 bg-white dark:bg-[#2B344B] p-8 md:p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-2xl shadow-black/10">

            {/* Título do Formulário */}
            <div className="mb-8">
                <h2 className="text-2xl font-black text-slate-900 dark:text-slate-50 tracking-tighter uppercase italic">
                    Cadastro de <span className="text-amber-500">Cliente</span>
                </h2>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Preencha os dados para registrar no sistema</p>
            </div>

            <div className="grid grid-cols-1 gap-6">

                {/* Campo Nome */}
                <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">
                        Nome completo:
                    </label>
                    <div className="relative group">
                        <input
                            required
                            value={clientes.nome}
                            type="text"
                            onChange={(e) => { handleChange('nome', e.target.value) }}
                            placeholder="Ex: Carlos Silva"
                            className="w-full px-6 py-4 bg-slate-50 dark:bg-[#1F2636] border border-transparent dark:border-white/5 rounded-2xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                        />
                    </div>
                </div>

                {/* Linha com CPF e Telefone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Campo CPF */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">
                            CPF:
                        </label>
                        <input
                            required
                            value={clientes.cpf}
                            type="text"
                            maxLength={14}
                            onChange={(e) => { handleChange('cpf', e.target.value) }}
                            placeholder="000.000.000-00"
                            className="w-full px-6 py-4 bg-slate-50 dark:bg-[#1F2636] border border-transparent dark:border-white/5 rounded-2xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all text-sm text-slate-800 dark:text-slate-100"
                        />
                    </div>

                    {/* Campo Telefone */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">
                            Telefone:
                        </label>
                        <input
                            required
                            value={clientes.telefone}
                            type="text"
                            onChange={(e) => { handleChange('telefone', e.target.value) }}
                            placeholder="(00) 00000-0000"
                            className="w-full px-6 py-4 bg-slate-50 dark:bg-[#1F2636] border border-transparent dark:border-white/5 rounded-2xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all text-sm text-slate-800 dark:text-slate-100"
                        />
                    </div>
                </div>

                {/* Botões de Ação */}
                <div className="flex items-center justify-end gap-4 mt-4 pt-6 border-t border-slate-100 dark:border-white/5">
                    <Link
                        href="/clientes"
                        className="px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-red-500 transition-colors"
                    >
                        Cancelar
                    </Link>

                    <button
                        type="submit"
                        className="px-10 py-4 bg-amber-500 hover:bg-amber-600 dark:bg-amber-500 dark:hover:bg-amber-400 text-[#2B344B] font-black rounded-2xl transition-all shadow-lg shadow-amber-500/20 active:scale-95 text-[10px] uppercase tracking-[0.2em]"
                    >
                        Salvar Cadastro
                    </button>
                </div>
            </div>
        </form>
    )
}