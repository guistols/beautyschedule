'use client'
import axios from "axios";
import Cookies from "js-cookie";
import { AuthContextType, Usuario } from "../types/auth/auth";

const api = axios.create({
    baseURL: 'http://localhost:8080'
});

const token = Cookies.get('token')

api.interceptors.request.use(


    (config) =>{
        debugger;
        if(token){
        config.headers.Authorization = `Bearer ${token}`;

        }
        return config
    }  
)

export default api;