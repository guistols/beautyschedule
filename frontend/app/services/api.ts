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
<<<<<<< HEAD
=======
        const token = Cookies.get('token')
>>>>>>> 8e4db9354f5f8e478b644a196b29fd6c19d4a463
        if(token){
        config.headers.Authorization = `Bearer ${token}`;

        }
        return config
    }  
)

export default api;