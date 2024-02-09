// Importa a classe Animal do arquivo Animal.ts no mesmo diretório
import { Animal } from "./Animal";

// Declaração da classe Reptil que herda de Animal
export class Reptil extends Animal {
    // Atributo privado específico da classe Reptil
    private tipo_de_escamas: string;

    // Construtor da classe Reptil, recebe nome, idade, gênero e tipo de escamas como parâmetros
    constructor(
        _nome: string,
        _idade: number,
        _genero: string,
        _tipo_de_escamas: string) {
        // Chama o construtor da classe Animal usando super() para inicializar os atributos herdados
        super(_nome, _idade, _genero);
        // Inicializa o atributo específico da classe Reptil
        this.tipo_de_escamas = _tipo_de_escamas;
    }

    // Método público que retorna o tipo de escamas do réptil
    public getTipoDeEscamas(): string {
        return this.tipo_de_escamas;
    }

    // Método público para definir o tipo de escamas do réptil
    public setTipoDeEscamas(tipo_de_escamas: string): void {
        this.tipo_de_escamas = tipo_de_escamas;
    }
}
