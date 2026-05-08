export class Usuario {
    constructor(
        public codigo: number,
        public username: string,
        public senha: string
    ) { }
}

export interface AuthContextType {
    username: Usuario | null,
    token: string | null,
    login: (usuario: Usuario, token: string) => void
    logout: () => void
}

export interface LoginResponse {
    sucesso: boolean,
    token: string
}