// Importa a classe Animal do arquivo Animal.ts no mesmo diretório
import { Animal } from "./Animal";

// Declaração da classe Habitat
export class Habitat {
    // Atributos privados da classe
    private nome: string;
    private listaDeAnimais: Array<Animal>;

    // Construtor da classe Habitat, recebe um nome e uma lista de animais como parâmetros
    constructor(_nome: string, _listaDeAnimais: Array<Animal>) {
        // Inicializa os atributos com os valores recebidos no construtor
        this.nome = _nome;
        this.listaDeAnimais = _listaDeAnimais;
    }

    // Método público que retorna o nome do habitat
    public getNome(): string {
        return this.nome;
    }

    // Método público para definir o nome do habitat
    public setNome(nome: string) {
        this.nome = nome;
    }

    // Método público que retorna a lista de animais do habitat
    public getListaDeAnimais(): Array<Animal> {
        return this.listaDeAnimais;
    }

    // Método público para definir a lista de animais do habitat
    public setListaDeAnimais(listaDeAnimais: Array<Animal>) {
        this.listaDeAnimais = listaDeAnimais;
    }
}
