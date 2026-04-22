'use client'
import { Cliente } from "../types/cliente/cliente";
import api from "./api";


export async function buscarListaCliente(): Promise<Cliente[]> {

    const response = await api.get<Cliente[]>('/cliente/listar');
    if (response.status == 200) {
        return response.data
    }
    return []
}

export async function alterarStatusCliente(id: number, novoStatus: string): Promise<void> {
    
    const response = await api.put<number>('/cliente/' + id + '/AlterarStatus', { status: novoStatus })

    if (response.status !== 200) {
        return;
    }
}
export async function editarCliente(id: number):Promise<void>{
    var response = await api.put<number>('/cliente/' + id)

            if (response.status !== 200) {
                return;
            }
}

export async function salvarCliente():Promise<Cliente[]>{
    var response = await api.post<Cliente[]>('/cliente/salvar')

            if (response.status !== 200) {
                return response.data
            }

            return []
}

export async function buscarClienteId(id: number):Promise<Cliente>{
    const clienteResult = await api.get<number>('/cliente/' + id);
    
    
    return clienteResult.data;
}