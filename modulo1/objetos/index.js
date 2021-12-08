/* const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])


Saida: Matheus Nachtergaele, Virginia Cavendish, Canal:Globo Horario: 19h */


/* 
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

saida: nome:juca, idade:3, raca: SRD | vai pegar tudo do cachorro + troca nome por : "Juba" | tudo do cacachorro + gato e troca tudo que tem a por o 

b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
R: É utilizado o spread para copiar um objeto para outro 

 */


 
/* function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

A-
Saida: false, undefined 
B- 
A função criada pegava um objeto passado por paremetro e acessava sua propriedade como parametro também, então no objeto pessoa a propriedade backender remete a false e altura não existe.A
 */

/* a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** 

```jsx
// Exemplo de entrada
const pessoa = {
   nome: "Amanda", 
   apelidos: ["Amandinha", "Mandinha", "Mandi"]
}

// Exemplo de saída
"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"
```




b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. 
Depois, chame a função feita no item anterior passando como argumento o novo objeto */


const usuario = {
    nome: "Pedro",
    apelidos: ["Junior","Fábio","Alessandro"]
}

function retornaNomeEApelido(usuario) {
    console.log(`Eu sou ${usuario.nome}, mas pode me chamar de ${usuario.apelidos[0]}, ${usuario.apelidos[1]}, ${usuario.apelidos[2]}`)
}

retornaNomeEApelido(usuario);


const funcionario = {
    ...usuario,
    apelidos: ["Fabio","Leandro","Lucas"]
}

retornaNomeEApelido(funcionario);



/* a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

1. O valor de `nome`
2. O numero de caracteres do valor `nome`
3. O valor de `idade`
4. O valor de `profissão`
5. O numero de caracteres do valor `profissão`
- Exemplo
    
    ```jsx
    const pessoa = {
    	nome: "Bruno", 
      idade: 23, 
    	profissao: "Instrutor"
    }
    
    minhaFuncao(pessoa)
    
    // Retorno: ["Bruno", 5, 23, "Instrutor", 9]
    ``` */


const professor = {
    nome: "Pedro",
    idade: 19,
    profissao: "Instrutor"
}

const aluno = {
    nome: "Junior",
    idade: 11,
    profissao: "estudante"
}

function retornaObjeto(professor,aluno){
    console.log([aluno.nome,professor.nome,aluno.nome.length,professor.nome.length,aluno.idade,professor.idade,aluno.profissao,professor.profissao,aluno.profissao.length,professor.profissao.length])
}

retornaObjeto(professor,aluno);

/* 

3. Resolva os passos a seguir: 
    
    a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
    
    b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
    
    c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 
    
    d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** 
    

     */

    var pera = {
        nome: "Pera",
        disponibilidade: true
    }

    var uva = {
        nome: "uva",
        disponibilidade: true
    }

    var maca = {
        nome: "maçã",
        disponibilidade: true
    }


    let carrinho = [];
    function inserirCarrinho(pera,uva,maca){
        
        carrinho.push(pera);
        carrinho.push(uva);
        carrinho.push(maca);
    }

    inserirCarrinho(pera,uva,maca);
    console.log(carrinho);