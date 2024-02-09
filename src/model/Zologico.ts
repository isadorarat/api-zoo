// Importa a classe Atracao do arquivo Atracao.ts no mesmo diretório
import { Atracao } from "./Atracao";

// Declaração da classe Zoologico
export class Zoologico {
    // Atributos privados da classe
    private nome: string;
    private listaDeAtracoes: Array<Atracao>;

    // Construtor da classe Zoologico, recebe nome e lista de atrações como parâmetros
    constructor(_nome: string, _listaDeAtracoes: Array<Atracao>) {
        // Inicializa os atributos com os valores recebidos no construtor
        this.nome = _nome;
        this.listaDeAtracoes = _listaDeAtracoes;
    }

    // Método público que retorna o nome do zoológico
    public getNome(): string {
        return this.nome;
    }

    // Método público para definir o nome do zoológico
    public setNome(nome: string) {
        this.nome = nome;
    }

    // Método público que retorna a lista de atrações do zoológico
    public getListaDeAtracoes(): Array<Atracao> {
        return this.listaDeAtracoes;
    }

    // Método público para definir a lista de atrações do zoológico
    public setListaDeAtracoes(listaDeAtracoes: Array<Atracao>) {
        this.listaDeAtracoes = listaDeAtracoes;
    }
}
