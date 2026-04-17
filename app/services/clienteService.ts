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