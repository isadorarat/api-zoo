// Importa a classe Animal do arquivo Animal.ts no mesmo diretório
import { Animal } from "./Animal";

// Declaração da classe Mamifero que herda de Animal
export class Mamifero extends Animal {
    // Atributo privado específico da classe Mamifero
    private raca: string;

    // Construtor da classe Mamifero, recebe raça, nome, idade e gênero como parâmetros
    constructor(
        _raca: string,
        _nome: string,
        _idade: number,
        _genero: string) {
        // Chama o construtor da classe Animal usando super() para inicializar os atributos herdados
        super(_nome, _idade, _genero);
        // Inicializa o atributo específico da classe Mamifero
        this.raca = _raca;
    }

    // Método público que retorna a raça do mamífero
    public getRaca(): string {
        return this.raca;
    }

    // Método público para definir a raça do mamífero
    public setRaca(raca: string): void {
        this.raca = raca;
    }
}
