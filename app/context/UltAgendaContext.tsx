'use client'
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export class Agenda {
    constructor (
        public codigo : number
    ) { }
}

export class Cliente {
     constructor(
        public codigo: number,
        public nome: string,
        public telefone: string,
        public cpf: string,
        public ativo: boolean
    ) { }
}

interface AgendaContextType {
    codigo: Agenda | null   
}

const AgendaContext = createContext<AgendaContextType | undefined>(undefined)

export function AgendaProvider({ children }: { children: ReactNode }){
    const [codigo, setCodigo] = useState<Agenda | null>(null)



}


