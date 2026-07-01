'use client'
import { salvarUsuario } from "@/app/services/usuarioService";
import { Usuario, UsuarioFormProps } from "@/app/types/auth/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function UsuarioForm({ usuarioExistente }: UsuarioFormProps) {

    const [usuario, setUsuario] = useState<Usuario>(
        usuarioExistente || new Usuario(null, '', '', '', ''))
    const router = useRouter();

    const handleSalvar = async (formData: FormData) => {
        if (usuarioExistente) {
            //await editarUsuario(usuario)
        } else {
            debugger;
            await salvarUsuario(usuario)
        }

        //limparRascunho()

        router.push("/usuarios")
    }

    return (
        <form action={handleSalvar} className="max-w-3xl mx-auto space-y-6 bg-white dark:bg-[#2B344B] p-6 sm:p-8 md:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-2xl shadow-black/10">

            {/* Título do Formulário */}
            <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-50 tracking-tighter uppercase italic">
                    Cadastro de <span className="text-amber-500">usuários</span>
                </h2>
                <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest mt-1">
                    Preencha os dados para registrar no sistema
                </p>
            </div>

            {/* Grid Principal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Campo Username (Ocupa 2 colunas no desktop) */}
                <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">
                        Username:
                    </label>
                    <input
                        required
                        value={usuario.username}
                        onChange={(e) => setUsuario({ ...usuario, username: e.target.value })}
                        type="text"
                        placeholder="Ex: Carlos Silva"
                        className="w-full px-5 py-3.5 bg-slate-50 dark:bg-[#1F2636] border border-transparent dark:border-white/5 rounded-2xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    />
                </div>

                {/* Campo CPF */}
                <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">
                        CPF:
                    </label>
                    <input
                        required
                        value={usuario.cpf}
                        onChange={(e) => setUsuario({ ...usuario, cpf: e.target.value })}
                        type="text"
                        maxLength={14}
                        placeholder="000.000.000-00"
                        className="w-full px-5 py-3.5 bg-slate-50 dark:bg-[#1F2636] border border-transparent dark:border-white/5 rounded-2xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400"
                    />
                </div>

                {/* Campo Senha */}
                <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">
                        Senha:
                    </label>
                    <input
                        required
                        value={usuario.senha}
                        onChange={(e) => setUsuario({ ...usuario, senha: e.target.value })}
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-5 py-3.5 bg-slate-50 dark:bg-[#1F2636] border border-transparent dark:border-white/5 rounded-2xl focus:outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/10 transition-all text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400"
                    />
                </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 sm:gap-4 mt-6 pt-6 border-t border-slate-100 dark:border-white/5">
                <Link
                    href="/usuarios"
                    className="w-full sm:w-auto text-center px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-red-500 transition-colors"
                >
                    Cancelar
                </Link>

                <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-4 bg-amber-500 hover:bg-amber-600 dark:bg-amber-500 dark:hover:bg-amber-400 text-[#2B344B] font-black rounded-2xl transition-all shadow-lg shadow-amber-500/20 active:scale-95 text-[10px] uppercase tracking-[0.2em]"
                >
                    Salvar Cadastro
                </button>
            </div>
        </form>
    )
}