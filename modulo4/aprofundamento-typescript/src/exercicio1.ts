//exercicio 1
//a
//const minhaString : string = 1
//ide já avisa que tem algo errado e pede para alterar para string antes da build.


//b
let meuNumero : string | number = 54 

meuNumero = "1"


//c
type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum CorFavorita {
    Verde = "VERDE",
    Roxo = "ROXO",
    Preto = "PRETO"
}

const pessoa1: Pessoa = {
    nome: "Pedro",
    idade: 32,
    corFavorita: "verde"
}

const pessoa2: Pessoa = {
    nome: "Rosana",
    idade: 40,
    corFavorita: "roxo"
}

const pessoa3: Pessoa = {
    nome: "Alex",
    idade: 16,
    corFavorita: "preto"
}

//d 