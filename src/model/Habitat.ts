import { Animal } from "./Animal";

/**
 * Classe Habitat representa um habitat no contexto de um zoológico.
 */
export class Habitat {
    private nome: string;
    private listaDeAnimais: Array<Animal>;

    /**
     * Construtor da classe Habitat.
     * @param _nome - O nome do habitat.
     * @param _listaDeAnimais - Lista de animais que habitam o habitat.
     */
    constructor(_nome: string, _listaDeAnimais: Array<Animal>) {
        this.nome = _nome;
        this.listaDeAnimais = _listaDeAnimais;
    }

    /**
     * Obtém o nome do habitat.
     * @returns O nome do habitat.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do habitat.
     * @param nome - Novo nome do habitat.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Obtém a lista de animais que habitam o habitat.
     * @returns A lista de animais do habitat.
     */
    public getListaDeAnimais(): Array<Animal> {
        return this.listaDeAnimais;
    }

    /**
     * Define a lista de animais que habitam o habitat.
     * @param listaDeAnimais - Nova lista de animais do habitat.
     */
    public setListaDeAnimais(listaDeAnimais: Array<Animal>): void {
        this.listaDeAnimais = listaDeAnimais;
    }
}
