/*  1. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**
    
```jsx
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
```

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b) 

Saida = 10 10,5
*/


/* 2.Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

Saida = 10 10 10 
 */

/* 3.Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

let p = let HorasTrabalhadas
let t = let ValorDia

*/

/* Exercício 1 
 */

let nome = prompt("Digite seu nome");
let idade = prompt("Digite sua idade");

console.log(typeof nome);
console.log(typeof idade);

/* Como não foi alocado nenhuma valor as variaveis o retorno do typeof foi indefinido */
/* Quando utilizado o prompt para alocar algo nas variaveis as duas retornaram como string por conta da propriedade do prompt que sempre retorna string */

alert("Olá "+nome+", você tem "+idade+"anos");

/* FIM EXERCICIO 1 */


/* Exercício 2
 */

let respostaUm = prompt("Você está feliz?").toUpperCase();
let respostaDois = prompt("Você está sozinho?").toUpperCase();
let respostaTres = prompt("Você está com sono?").toUpperCase();

const perguntaUm = "Você está feliz?";
const perguntaDois = "Você está sozinho?";
const perguntaTres = "Você está com sono?";

alert(perguntaUm+" - "+ respostaUm);
alert(perguntaDois+" - "+respostaDois);
alert(perguntaTres+" - "+respostaTres);


/* FIM EXERCICIO 2 */


/* Exercício 3
 */

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores, para inserir um novo precisamos de uma variavel auxiliar para fazer a troca dos valores, no caso a variavel c.

let c = a;
a = b;
b = c;




// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10


/* FIM EXERCICIO 3 */



/* DESAFIO */

let numeroUm = parseInt(prompt("Insira um numero"), 10);
let numeroDois = parseInt(prompt("Insira um segundo numero"), 10);


let x = numeroUm + numeroDois;
let y = numeroUm * numeroDois;

console.log("O primeiro número somado ao segundo número resulta em: "+x+".");
console.log("O primeiro número multiplicado ao segundo número resulta em: "+y+".");
/* FIM DESAFIO */