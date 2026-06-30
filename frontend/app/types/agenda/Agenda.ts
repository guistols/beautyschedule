export class Agenda {
    constructor (
        public id:number|null,
        public dataHora:Date|  string,
        public preco: number,
        public clienteId: number,
        public servicoId: number,
        public servicoDesc: String,
        public clienteNome: String
    ) {}
}

export interface AgendaFormProps {
    agendaExistente ? : Agenda
}