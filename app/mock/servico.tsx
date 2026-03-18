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

}