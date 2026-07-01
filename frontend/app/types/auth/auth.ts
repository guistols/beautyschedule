export class Usuario {
    constructor(
        public id: number | null,
        public username: string,
        public role: string,
        public cpf: string,
        public senha: string
    ) { }
}
export interface UsuarioFormProps {
    usuarioExistente ? : Usuario 
}
export interface AuthContextType {
    username: Usuario | null,
    token: string | null,
    login: (usuario: Usuario, token: string) => void
    logout: () => void
}
export interface AuthState{
    usuario: Usuario | null,
    token: string
}

export interface LoginResponse {
    sucesso: boolean,
    token: string,
    usuario: Usuario 
}