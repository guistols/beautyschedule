'use client'

import { Servico } from "../types/servico/servico";
import api from "./api";


export async function salvarServico(servico: Servico):Promise<void>{
    var response = await api.post<Servico>('/servico/salvar' ,servico)
    if (response.status !== 200) {
        console.log(response)
    }
}

export async function editarServico(servico: Servico):Promise<void>{
    var response = await api.put<Servico>('/servico/'+ servico.id ,servico)
    if (response.status !== 200) {
        
    }
}

export async function buscarListaServico():Promise<Servico[]>{
   
    const response = await api.get<Servico[]>('/servico/listar');

    if (response.status === 200) {
        return response.data
    }

    return []

}
export async function buscarServicoId(id: number):Promise<Servico> {
    const servicoResult = await api.get<Servico>('/servico/' + id);

    return servicoResult.data;
}




export async function alterarStatusServico(id: number, novoStatus: string):Promise<void>{      
        var response = await api.put<number>('/servico/' + id +'/AlterarStatus', novoStatus)
        if (response.status !== 200) {
        }
}

