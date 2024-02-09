// Importa a classe Animal do arquivo Animal.ts no mesmo diretório
import { Animal } from "./Animal";

// Declaração da classe Ave que herda de Animal
export class Ave extends Animal {
    // Atributo privado específico da classe Ave
    private envergadura: number;

    // Construtor da classe Ave, recebe nome, idade, gênero e envergadura como parâmetros
    constructor(
        _nome: string,
        _idade: number,
        _genero: string,
        _envergadura: number) {
        // Chama o construtor da classe Animal usando super() para inicializar os atributos herdados
        super(_nome, _idade, _genero);
        // Inicializa o atributo específico da classe Ave
        this.envergadura = _envergadura;
    }

    // Método público que retorna a envergadura da ave
    public getEnvergadura(): number {
        return this.envergadura;
    }

    // Método público para definir a envergadura da ave
    public setEnvergadura(envergadura: number): void {
        this.envergadura = envergadura;
    }
}
