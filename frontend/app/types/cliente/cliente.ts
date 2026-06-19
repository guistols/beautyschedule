export class Cliente {
    constructor(
        public id: number |null,
        public nome: string,
        public telefone: string,
        public cpf: string,
        public status: string
    ) { }
}

export interface ClienteFormProps {
    clienteExistente?: Cliente
}