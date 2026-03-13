export class Cliente {
     constructor(
        public codigo: number,
        public nome: string,
        public telefone: string,
        public cpf: string,
        public ativo: boolean
    ) { }
}

export class ClienteMock{

    private static clienteDB : Cliente[] = [
        new Cliente(1,"Guilherme","(48)9999-8888","123.456.789-10",true),
        new Cliente(2,"Rogério","(48)7777-6666","321.654.789-09",true),
        new Cliente(3,"Carlos","(48)5555-4444","020.032.689-04",true)
    ];

    static async listarTodos() : Promise<Cliente[]>{
        return [...this.clienteDB]
    }
}