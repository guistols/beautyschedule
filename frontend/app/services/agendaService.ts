import { Agenda } from "../types/agenda/Agenda";
import api from "./api"


export async function salvarAgenda(agenda: Agenda):Promise<void>{
    debugger;
    var response = await api.post<Agenda>('/agenda/salvar',agenda)
    if(response.status !== 200){
        console.log(response)
    }
}


export async function buscarListaAgenda():Promise<Agenda[]>{
<<<<<<< HEAD
=======
    debugger;
>>>>>>> 8e4db9354f5f8e478b644a196b29fd6c19d4a463
    const response = await api.get<Agenda[]>('/agenda/listar');

    if(response.status === 200){
        return response.data    
    }

    return [];
}