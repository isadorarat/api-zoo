import { Habitat } from "./Habitat";

/**
 * Classe Atracao representa uma atração em um zoológico.
 */
export class Atracao {
    private nome: string;
    private listaDeHabitats: Array<Habitat>;

    /**
     * Construtor da classe Atracao.
     * @param _nome - O nome da atração.
     * @param _listaDeHabitats - Lista de habitats associados à atração.
     */
    constructor(_nome: string, _listaDeHabitats: Array<Habitat>) {
        this.nome = _nome;
        this.listaDeHabitats = _listaDeHabitats;
    }

    /**
     * Obtém o nome da atração.
     * @returns O nome da atração.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome da atração.
     * @param nome - Novo nome da atração.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Obtém a lista de habitats associados à atração.
     * @returns A lista de habitats.
     */
    public getListaDeHabitats(): Array<Habitat> {
        return this.listaDeHabitats;
    }

    /**
     * Define a lista de habitats associados à atração.
     * @param listaDeHabitats - Nova lista de habitats.
     */
    public setListaDeHabitats(listaDeHabitats: Array<Habitat>): void {
        this.listaDeHabitats = listaDeHabitats;
    }
}
