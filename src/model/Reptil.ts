import { Animal } from "./Animal";

/**
 * Classe Reptil representa um réptil no contexto de um zoológico, estendendo a classe Animal.
 */
export class Reptil extends Animal {
    private tipo_de_escamas: string;

    /**
     * Construtor da classe Reptil.
     * @param _nome - O nome do réptil.
     * @param _idade - A idade do réptil.
     * @param _genero - O gênero do réptil.
     * @param _tipo_de_escamas - O tipo de escamas do réptil.
     */
    constructor(
        _nome: string,
        _idade: number,
        _genero: string,
        _tipo_de_escamas: string) {
        //* Chama o construtor da classe pai (Animal) com as propriedades específicas de Reptil.
        super(_nome, _idade, _genero);
        //*Inicializa a propriedade específica de Reptil.
        this.tipo_de_escamas = _tipo_de_escamas;
    }

    /**
     * Obtém o tipo de escamas do réptil.
     * @returns O tipo de escamas do réptil.
     */
    public getTipoDeEscamas(): string {
        return this.tipo_de_escamas;
    }

    /**
     * Define o tipo de escamas do réptil.
     * @param tipo_de_escamas - Novo tipo de escamas do réptil.
     */
    public setTipoDeEscamas(tipo_de_escamas: string): void {
        this.tipo_de_escamas = tipo_de_escamas;
    }
}
