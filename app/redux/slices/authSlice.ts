import { AuthState, Usuario } from "@/app/types/auth/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Cookies from "js-cookie";



const usuarioRecover = Cookies.get("usuario");
const tokenRecover = Cookies.get("token");

const initialState: AuthState = {
    usuario: usuarioRecover ? JSON.parse(usuarioRecover) as Usuario: null,
    token: tokenRecover ?? ""
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    //funcoes
    reducers:{
        login:(state,action: PayloadAction<{usuario: Usuario,token: string}>) =>{
            state.token = action.payload.token
            state.usuario = action.payload.usuario
            Cookies.set("usuario", JSON.stringify(action.payload.usuario), { expires: 7 });
            Cookies.set("token", action.payload.token, { expires: 7, secure: true })
        },
        logout:(state) =>{
            state.token=""
            state.usuario=null
            Cookies.remove("usuario")
            Cookies.remove("token")
        }
    }
});

export const {login,logout} = authSlice.actions;
export default authSlice.reducer;