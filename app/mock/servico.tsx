export class Servico {
    constructor (
        public id: number|null,
        public descricao: string,
        public tempo: number,
        public preco: number,
        public status: string, 
    ) {}
}
