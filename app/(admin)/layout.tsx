import Footer from "../components/Footer"
import Header from "../components/Header"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        /* Container principal que ocupa 100% da altura da tela */
        <div className="flex min-h-screen w-full" >
            {/* Wrapper do Conteúdo - Flex Col para empilhar Header, Main e Footer */}
            <div className="flex flex-1 flex-col overflow-x-hidden">
                <Header />
                {/* O segredo: 'flex-1' faz o main crescer e empurrar o footer para baixo */}
                <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                    <div className="w-full h-full">
                        {children}
                    </div>
                </main>
                <Footer />
            </div>
       </div >
    )
}