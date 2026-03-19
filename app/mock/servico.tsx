export class Servico {
    constructor (
        public codigo: number,
        public descricao: string,
        public tempo: number,
        public preco: number
    ) {}
}


export class ServicoMock {
    private static servicosDB: Servico[] = [
        new Servico(1,"Tesoura",30,40),
        new Servico(2,"Barba",20,30),
        new Servico(3,"Cabelo + Barba",45,75)    
    ]

    static async listarTodos():Promise<Servico[]>{
        return [...this.servicosDB]
    }

    static async salvar(servico: Servico): Promise<void>{
        const indexExistente = this.servicosDB.findIndex(s => s.codigo === servico.codigo)


        if(indexExistente === -1){
            const novoCodigo = Math.max(...this.servicosDB.map(s => s.codigo)) +1

            servico.codigo = novoCodigo

            this.servicosDB.push(servico)
        }else{
            this.servicosDB[indexExistente].descricao   = servico.descricao
            this.servicosDB[indexExistente].preco       = servico.preco
            this.servicosDB[indexExistente].tempo       = servico.tempo
        }
    }

    static async buscarId(codigo:number): Promise<Servico | undefined> {
        return this.servicosDB.find(s => s.codigo === codigo)
    }
}