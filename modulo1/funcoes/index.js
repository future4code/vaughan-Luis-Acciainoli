/* function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))


a) O que vai ser impresso no console?

R => 10 | 50 ;

b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

R => 10 | 50 ;
 */


/* 
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)



a. Explique o que essa função faz e qual é sua utilidade

A função deixa tudo a string minuscula e compara com a string "cenoura";

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:

i.   Eu gosto de cenoura
true
ii.  CENOURA é bom pra vista
true
iii. Cenouras crescem na terra
false */



/* 1. Escreva as funções explicadas abaixo:
    
    a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

    "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

    */

/*     function retornarNome() {
        return alert(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`);
       }
    
    const nome = prompt("Qual seu nome?");
    const idade = prompt("Qual sua idade?");
    const cidade = prompt("Qual sua Cidade?");
    const profissao = prompt("Qual sua profissão?");


    retornarNome(); */

     /* Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem. */
    


/* 
    b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), 
    a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
*/
/*     function retornaPessoa(nome,idade,cidade,profissao) {
        return alert(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`);
    }

    const nome = prompt("Qual seu nome?");
    const idade = Number(prompt("Qual sua idade?"));
    const cidade = prompt("Qual sua Cidade?");
    const profissao = prompt("Qual sua profissão?");

    retornaPessoa(nome,idade,cidade,profissao); */

/*  Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].     */


/* 2. Escreva as funções explicadas abaixo: */
    
/*     a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. 
          Invoque a função e imprima no console o resultado.
*/    
/*     let retornaResultado = (n1, n2) => {
        console.log(n1 + n2);
        }
        retornaResultado(5,10); */

/*     b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
*/    
/* let retornaComparacao = (n1, n2) => {
    console.log("O primeiro número é maior ou igual ao segundo? " + (n1 >= n2));
    }
    retornaComparacao(5,5);
 */

/*     c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
*/   
/* 
function retornaParOuImpar(n1) {
    console.log(`O número é par? ${n1 % 2 == 0}`);
}
    retornaParOuImpar(2); */
/*     

d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas. 
*/

/* function retornaString(palavra) {

    console.log(`O tamanho da mensagem é ${palavra.length} e em minusculo fica ${palavra.toUpperCase()}`);
}

const palavra = prompt("Qual a palavra?");
    retornaString(palavra);
 */

/*3 Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
    Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
    Por fim, mostre no console o resultado das operações:
 */

    let retornaSoma = (n1, n2) => {
        return console.log((n1 + n2)) ;
        }

    let retornaSubtracao = (n1, n2) => {
            return console.log((n1 - n2)) ;
        }

    let retornaMultiplicacao = (n1, n2) => {
        return console.log((n1 * n2)) ;
        }

    let retornaDivisao = (n1, n2) => {
            return console.log((n1 / n2)) ;
            }

    const n1 = Number(prompt("Digite o primeiro valor!"));
    const n2 = Number(prompt("Digite o segundo valor!"));

    retornaSoma(n1,n2);
    retornaSubtracao(n1,n2);
    retornaMultiplicacao(n1,n2);
    retornaDivisao(n1,n2);