'use client'

import { use } from "react"
import { LoginResponse, Usuario } from "../types/auth/auth"
import api from "./api"



export async function validarLogin(username: string|undefined, senha:string|undefined):Promise<LoginResponse | null>{

    const response = await api.post<LoginResponse>('/auth/login' , {username,senha})

            if(response.status !== 200){
                alert("Usuário ou senha inválido!")
                response.data.sucesso =false;
                return response.data;
            }
            response.data.sucesso =true;
            return response.data;
}
