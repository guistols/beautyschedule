import { Usuario } from "../types/auth/auth";
import api from "./api";

export async function salvarUsuario(usuario: Usuario):Promise<void>{
        var response = await api.post<Usuario>('/usuarios/salvar')

        if(response.status!==200){

        }

        
}
export async function buscarListaUsuario(): Promise<Usuario[]> {
    const response = await api.get<Usuario[]>('/usuarios/listar');
    if (response.status === 200) {
        return response.data
    }
    return []
}