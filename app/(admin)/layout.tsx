'use client'
import { useEffect } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useAuth } from "../context/AuthContext"
import { useRouter } from "next/navigation";
import { Sidebar } from "../components/Sidebar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {

    const {usuario} = useAuth();
    const router = useRouter();


    useEffect(()=>{
        
        if(usuario == null){
            
            router.push("/login")
        }
    })

    if(usuario== null) return null;

    return (
        /* Container principal com fundo condizente com o resto do sistema */
    <div className="flex min-h-screen w-full bg-[#F8FAFC] dark:bg-slate-950 transition-colors duration-300">
        
        {/* Sidebar - Fixa na lateral para não flutuar sobre o conteúdo */}
        <div className="hidden md:flex sticky top-0 h-screen flex-shrink-0">
            <Sidebar />
        </div>

        {/* Wrapper do Conteúdo - Ocupa o restante do espaço horizontal */}
        <div className="flex flex-1 flex-col min-w-0 overflow-hidden">
            
            {/* Header - Z-index garantido para ficar sobre o main, mas respeitando a sidebar */}
            <Header />

            {/* Main Content - 'flex-1' garante que o footer fique sempre no rodapé */}
            <main className="flex-1 w-full overflow-y-auto">
                <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                    {/* Container do conteúdo dinâmico */}
                    <div className="min-h-[calc(100vh-200px)]">
                        {children}
                    </div>
                </div>
                
                {/* Footer integrado ao fluxo de scroll do conteúdo */}
                <Footer />
            </main>
            
        </div>
    </div>
    )
}