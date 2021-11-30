/* const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado) */

//SAIDA = false,false,true,Boolean


/* let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) */

//SAIDA VAI SER CONCATENAÇÃO DE DUAS STRINGS

/* 
let primeiroNumero = parseInt(prompt("Digite um numero!"),10);
let segundoNumero = parseInt(prompt("Digite outro numero!"),10);

const soma = primeiroNumero + segundoNumero;

console.log(soma)
 */
/* 

//INICIO EXERCICIO PRATICO

1 - a) Pergunte a idade do usuário
    b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?",
    seguido pela resposta (`true` ou `false`)
    d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo) */

    const idadeUser = parseInt(prompt("Digite sua idade!"), 10);
    const idadeBestFriends = parseInt(prompt("Digite a idade do seu melhor amigo ou amiga1"), 10);
    console.log(typeof idadeBestFriends);

    console.log("Sua idade é maior do que a do seu melhor amigo?" + (idadeUser > idadeBestFriends));
    console.log("Suas diferenças de idade são:" + (idadeUser - idadeBestFriends));




/*  2 - a) Peça ao usuário que insira um número **par**
     b) Imprima na console **o resto da divisão** desse número por 2.
     c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
     d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
*/

    let numeroPar = parseInt(prompt("Digite um número par!"), 10);
    console.log(numeroPar%2);
    //todos números par é divisivel por 2, resultando em resto 0
    //o numero vai ser 1


/* 
3 - a) A idade do usuário em meses
    b) A idade do usuário em dias
    c) A idade do usuário em horas
 */
    const idadeUsers = parseInt(prompt("Digite sua idade!"), 10);
    console.log("Sua idade em meses é?" + (idadeUsers * 12));
    console.log("Sua idade em dias é?" + (idadeUsers * 12 * 30));
    console.log("Sua idade em horas é?" + (idadeUsers * 12 * 30 * 24));

/* 4 - Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false

    O primeiro numero é maior que segundo? true
    O primeiro numero é igual ao segundo? false
    O primeiro numero é divisível pelo segundo? true
    O segundo numero é divisível pelo primeiro? true

    obs: O true ou false vai depender dos números inseridos e do resultado das operações. */ 

    let primeiroNumero = parseInt(prompt("Digite o primeiro numero"), 10);
    let segundoNumero = parseInt(prompt("Digite o segundo numero"), 10);

    console.log("O primeiro numero é maior que segundo?" + (primeiroNumero > segundoNumero));
    console.log("O primeiro numero é igual ao segundo?" + (primeiroNumero == segundoNumero));
    console.log("O primeiro numero é divisível pelo segundo?" + ((primeiroNumero % segundoNumero) == 0));
    console.log("O segundo numero é divisível pelo primeiro?" + ((segundoNumero % segundoNumero) == 0));

