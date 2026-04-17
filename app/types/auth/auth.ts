export class Usuario {
    constructor(
        public codigo: number,
        public usuario: string
    ) { }
}

export interface AuthContextType {
    usuario: Usuario | null,
    token: string | null,
    login: (usuario: Usuario, token: string) => void
    logout: () => void
}

export interface LoginResponse {
    token: string
}