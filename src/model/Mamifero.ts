import { Animal } from "./Animal";

/**
 * Classe Mamifero representa um mamífero no contexto de um zoológico, estendendo a classe Animal.
 */
export class Mamifero extends Animal {
    private raca: string;

    /**
     * Construtor da classe Mamifero.
     * @param _raca - A raça do mamífero.
     * @param _nome - O nome do mamífero.
     * @param _idade - A idade do mamífero.
     * @param _genero - O gênero do mamífero.
     */
    constructor(
        _raca: string,
        _nome: string,
        _idade: number,
        _genero: string) {
        // Chama o construtor da classe pai (Animal) com as propriedades específicas de Mamifero.
        super(_nome, _idade, _genero);
        // Inicializa a propriedade específica de Mamifero.
        this.raca = _raca;
    }

    /**
     * Obtém a raça do mamífero.
     * @returns A raça do mamífero.
     */
    public getRaca(): string {
        return this.raca;
    }

    /**
     * Define a raça do mamífero.
     * @param raca - Nova raça do mamífero.
     */
    public setRaca(raca: string): void {
        this.raca = raca;
    }
}
