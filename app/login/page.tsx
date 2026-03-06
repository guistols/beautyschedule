'use client'

import { useRouter } from "next/navigation"

export default function Login() {

    const router = useRouter();

    const handleLogin = async (formData:FormData) => {
        const usuario = formData.get("usuario")
        const senha   = formData.get("senha")

        console.log(`Autenticado - Usuário: ${usuario}`)

        router.push("/agenda")
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] dark:bg-slate-950 px-4 transition-colors duration-300">
            <div className="w-full max-w-md p-8 md:p-12 bg-white dark:bg-[#2B344B] shadow-2xl shadow-slate-200/60 dark:shadow-none border border-slate-100 dark:border-[#1F2636]/50 rounded-[2.5rem] transition-all">

                {/* Header do Login */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <polyline points="16 11 18 13 22 9" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                        Bem-vindo!
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                        Acesse sua conta para gerenciar sua agenda.
                    </p>
                </div>

                <form action={handleLogin} className="flex flex-col gap-6">
                    
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-1">
                            Usuário
                        </label>
                        <div className="relative group">
                            <input
                                name="usuario"
                                type="text"
                                placeholder="Digite seu usuário"
                                className="w-full px-6 py-4 bg-slate-50 dark:bg-[#1F2636] border border-slate-200 dark:border-[#1F2636] rounded-2xl focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-600 dark:focus:border-amber-500 transition-all text-slate-800 dark:text-slate-100 placeholder:text-slate-400 font-semibold"
                            />
                        </div>
                    </div>

                    
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-1">
                            Senha
                        </label>
                        <div className="relative group">
                            <input
                                name="senha"
                                type="password"
                                placeholder="Digite sua senha"
                                className="w-full px-6 py-4 bg-slate-50 dark:bg-[#1F2636] border border-slate-200 dark:border-[#1F2636] rounded-2xl focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-600 dark:focus:border-amber-500 transition-all text-slate-800 dark:text-slate-100 placeholder:text-slate-400 font-semibold"
                            />
                        </div>
                    </div>

                    
                    <button
                        type="submit"
                        className="mt-4 w-full bg-[#2B344B] dark:bg-amber-500 hover:bg-slate-800 dark:hover:bg-amber-400 text-white dark:text-[#2B344B] font-bold py-5 rounded-2xl transition-all shadow-xl shadow-slate-200 dark:shadow-amber-900/20 active:scale-[0.98] uppercase text-xs tracking-[0.2em]"
                    >
                        Entrar no Sistema
                    </button>
                </form>
            </div>
        </div>
    );
}