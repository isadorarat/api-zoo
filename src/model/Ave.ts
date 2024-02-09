import { Animal } from "./Animal";

/**
 * Classe Ave representa uma ave no contexto de um zoológico, estendendo a classe Animal.
 */
export class Ave extends Animal {
    private envergadura: number;

    /**
     * Construtor da classe Ave.
     * @param _nome - O nome da ave.
     * @param _idade - A idade da ave.
     * @param _genero - O gênero da ave.
     * @param _envergadura - A envergadura da ave.
     */
    constructor(
        _nome: string,
        _idade: number,
        _genero: string,
        _envergadura: number) {
        //* Chama o construtor da classe pai (Animal) com as propriedades específicas de Ave.
        super(_nome, _idade, _genero);
        //*Inicializa a propriedade específica de Ave.
        this.envergadura = _envergadura;
    }

    /**
     * Obtém a envergadura da ave.
     * @returns A envergadura da ave.
     */
    public getEnvergadura(): number {
        return this.envergadura;
    }

    /**
     * Define a envergadura da ave.
     * @param envergadura - Nova envergadura da ave.
     */
    public setEnvergadura(envergadura: number): void {
        this.envergadura = envergadura;
    }
}
