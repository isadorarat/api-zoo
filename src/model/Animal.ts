// Declaração da classe Animal
export class Animal {

    // Atributos privados da classe
    private nome: string;
    private idade: number;
    private genero: string;

    // Construtor da classe Animal, recebe nome, idade e gênero como parâmetros
    constructor(_nome: string, _idade: number, _genero: string) {

        // Inicializa os atributos com os valores recebidos no construtor
        this.nome = _nome;
        this.idade = _idade;
        this.genero = _genero;
    }

    // Método público que retorna o nome do animal
    public getNome(): string {
        return this.nome;
    }

    // Método público para definir o nome do animal
    public setNome(nome: string): void {
        this.nome = nome;
    }

    // Método público que retorna a idade do animal
    public getIdade(): number {
        return this.idade;
    }

    // Método público para definir a idade do animal
    public setIdade(idade: number): void {
        this.idade = idade;
    }

    // Método público que retorna o gênero do animal
    public getGenero(): string {
        return this.genero;
    }

    // Método público para definir o gênero do animal
    public setGenero(genero: string): void {
        this.genero = genero;
    }
}
