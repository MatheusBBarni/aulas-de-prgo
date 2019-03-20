class Pessoa {
    constructor(nome, idade, altura, peso, animal) {
        this._nome = nome
        this._idade = idade 
        this._altura = altura
        this._peso = peso
        this._animal = new Animal();
    }

    get nome() {
        return this._nome
    }
    set nome(nome) {
        this._nome = nome
    }

    get idade() {
        return this._idade
    }
    set idade(idade) {
        this._idade = idade
    }

    get altura() {
        return this._altura
    }
    set altura(altura) {
        this._altura = altura
    }

    get peso() {
        return this._peso
    }
    set peso(peso) {
        this._peso = peso
    }

    get animal() {
        return this._animal
    }
    set animal(animal) {
        this._animal = animal
    }

    imc() {
        return this.peso/(this.altura*this.altura)
    }

}