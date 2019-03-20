class Animal {
    constructor(raca, nome) {
        this._raca = raca
        this._nome = nome
    }

    get nome() {
        return this._nome
    }
    set nome(nome) {
        this._nome = nome
    }

    get raca() {
        return _raca
    }
    set raca(raca) {
        _raca = raca
    }
}