// Importa a classe Habitat do arquivo Habitat.ts no mesmo diretório
import { Habitat } from "./Habitat";

// Declaração da classe Atracao
export class Atracao {
    // Atributos privados da classe
    private nome: string;
    private listaDeHabitats: Array<Habitat>;

    // Construtor da classe Atracao, recebe nome e lista de habitats como parâmetros
    constructor(_nome: string, _listaDeHabitats: Array<Habitat>) {
        // Inicializa os atributos com os valores recebidos no construtor
        this.nome = _nome;
        this.listaDeHabitats = _listaDeHabitats;
    }

    // Método público que retorna o nome da atração
    public getNome(): string {
        return this.nome;
    }

    // Método público para definir o nome da atração
    public setNome(nome: string) {
        this.nome = nome;
    }

    // Método público que retorna a lista de habitats da atração
    public getListaDeHabitats(): Array<Habitat> {
        return this.listaDeHabitats;
    }

    // Método público para definir a lista de habitats da atração
    public setListaDeHabitats(listaDeHabitats: Array<Habitat>) {
        this.listaDeHabitats = listaDeHabitats;
    }
}
