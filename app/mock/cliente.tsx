export class Cliente {
    constructor(
        public id: number |null,
        public nome: string,
        public telefone: string,
        public cpf: string,
        public status: string
    ) { }
}

export class ClienteMock {

    private static clienteDB: Cliente[] = [
        new Cliente(1, "Guilherme", "(48)9999-8888", "123.456.789-10","true"),
        new Cliente(2, "Rogério", "(48)7777-6666", "321.654.789-09", "true"),
        new Cliente(3, "Carlos", "(48)5555-4444", "020.032.689-04", "true")
    ];

    static async listarTodos(): Promise<Cliente[]> {
        return [...this.clienteDB]
    }

    // static async salvar(cliente: Cliente): Promise<void> {
    //     //busca pelo indice (isso e o identificador do array)
    //     const indexExistente = this.clienteDB.findIndex(c => c.id === cliente.id);

    //     //o -1 é porque caso ele não esteja na lista, o javascript retorna -1
    //     if (indexExistente === -1) {
            
    //         //biblioteca para pegar o ultimo código +1
    //         const novoCodigo = Math.max(...this.clienteDB.map(c => c.id)) + 1

    //         cliente.id = novoCodigo
    //         //envia
    //         this.clienteDB.push(cliente)
    //     }else{
    //         //altera o cliente no index exato
    //         this.clienteDB[indexExistente].nome         = cliente.nome
    //         this.clienteDB[indexExistente].telefone     = cliente.telefone
    //         this.clienteDB[indexExistente].cpf          = cliente.cpf
    //     }
    // }

    // static async buscarId(codigo: number): Promise<Cliente | undefined> {
    //     return this.clienteDB.find(c => c.id === codigo)
    // }
}

