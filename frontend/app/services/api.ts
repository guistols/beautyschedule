'use client'
import axios from "axios";
import Cookies from "js-cookie";
import { AuthContextType, Usuario } from "../types/auth/auth";

const api = axios.create({
    baseURL: 'http://localhost:8080'
});

api.interceptors.request.use(
    

    (config) =>{
        debugger;
        const token = Cookies.get('token')
        if(token){
        config.headers.Authorization = `Bearer ${token}`;

        }
        return config
    }  
)

export default api;