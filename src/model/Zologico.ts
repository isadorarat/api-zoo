import { Atracao } from "./Atracao";

/**
 * Classe Zoologico representa um zoológico contendo uma lista de atrações.
 */
export class Zoologico {
    private nome: string;
    private listaDeAtracoes: Array<Atracao>;

    /**
     * Construtor da classe Zoologico.
     * @param _nome - O nome do zoológico.
     * @param _listaDeAtracoes - Lista de atrações no zoológico.
     */
    constructor(_nome: string, _listaDeAtracoes: Array<Atracao>) {
        this.nome = _nome;
        this.listaDeAtracoes = _listaDeAtracoes;
    }

    /**
     * Obtém o nome do zoológico.
     * @returns O nome do zoológico.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do zoológico.
     * @param nome - Novo nome do zoológico.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Obtém a lista de atrações no zoológico.
     * @returns A lista de atrações no zoológico.
     */
    public getListaDeAtracoes(): Array<Atracao> {
        return this.listaDeAtracoes;
    }

    /**
     * Define a lista de atrações no zoológico.
     * @param listaDeAtracoes - Nova lista de atrações no zoológico.
     */
    public setListaDeAtracoes(listaDeAtracoes: Array<Atracao>): void {
        this.listaDeAtracoes = listaDeAtracoes;
    }
}
