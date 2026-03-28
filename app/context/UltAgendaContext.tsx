'use client'
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export class Agenda {
    constructor (
        public codigo : number
    ) { }
}

interface AgendaContextType {
    agendas: Agenda[],
    ultAgenda: (usuario: Agenda) => void 
}


/* Fazer o provider, e buscar o ultimo registro do array para registrar o contexto */

const AgendaContext = createContext<AgendaContextType | undefined>(undefined)

export function AgendaProvider({ children }: { children: ReactNode }){
    const [codigo, setCodigo] = useState<Agenda[] | null>(null)

    const ultAgenda = (agenda: Agenda) => {
        
       codigo?.push(agenda)
       
    }


}


