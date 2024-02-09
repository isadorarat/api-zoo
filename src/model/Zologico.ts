import { Atracao } from "./Atracao";

export class Zoologico {
    private nome: string;
    private listaDeAtracoes: Array<Atracao>;

    constructor(_nome: string, _listaDeAtracoes: Array<Atracao>) {
        this.nome = _nome;
        this.listaDeAtracoes = _listaDeAtracoes;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string) {
        this.nome = nome;
    }

    public getListaDeAtracoes(): Array<Atracao> {
        return this.listaDeAtracoes;
    }

    public setListaDeAtracoes(listaDeAtracoes: Array<Atracao>) {
        this.listaDeAtracoes = listaDeAtracoes;
    }
}
