'use client'
import { Cliente } from "../types/cliente/cliente";
import api from "./api";


export async function buscarListaCliente(): Promise<Cliente[]> {
    debugger;
    const response = await api.get<Cliente[]>('/cliente/listar');
    if (response.status === 200) {
        return response.data
    }
    return []
}

export async function alterarStatusCliente(id: number, novoStatus: string): Promise<void> {
    
    const response = await api.put<number>('/cliente/' + id + '/AlterarStatus', { status: novoStatus })

    if (response.status !== 200) {
     
    }
}
export async function editarCliente(cliente : Cliente):Promise<void>{
    var response = await api.put<number>('/cliente/' + cliente.id, cliente )
        if (response.status !== 200) {

        }
}

export async function salvarCliente(cliente: Cliente):Promise<void>{
    var response = await api.post<Cliente>('/cliente/salvar', cliente)
            if (response.status !== 200) {
                
            }
}

export async function buscarClienteId(id: number):Promise<Cliente>{
    const clienteResult = await api.get<Cliente>('/cliente/' + id);
    
    
    return clienteResult.data;
}