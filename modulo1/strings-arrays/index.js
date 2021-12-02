/* let array
console.log('a. ', array)

Saida = undefined 

array = null
console.log('b. ', array)

Saida = null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

Saida = 10

let i = 0
console.log('d. ', array[i])

Não incializou array, não vai sair nada

array[i+1] = 19
console.log('e. ', array)

Também não iniciou array

const valor = array[i+6]
console.log('f. ', valor) 

não existe a variavel i

*/

/* 
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

"Subi num ônibus em Marrocos"


Saida = 27
 */

/* Exercício 1 */

const nome = prompt("Digite seu Nome");
const email = prompt("Digite seu E-mail");

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`);



/* Exercício 2 */ 

 let comidas = ["pizza","batata","salmão","queijo","salame"];

console.log(comidas.join([separator = ',']));

console.log(`Essas são minhas comidas favoritas: ${comidas.join(separator = "\n")}`);

let comidaUser = prompt("Entre com suas comidas favoritas").split(",");
console.log(comidas[0],comidaUser[1],comidas[2],comidas[3],comidas[4])


/* Exercício 3 */

let listaDeTarefasEntrada = prompt("Insira três tarefas para realizar ao longo do dia: Com espaços")
let listaDeTarefas = listaDeTarefasEntrada.split(" ");

console.log(listaDeTarefas.join([separator = '-']));

let indice = parseInt(prompt("Digite qual o numero da tarefa que realizou"), 10);
listaDeTarefas.splice((indice-1),1);

console.log(listaDeTarefas.join([separator = '-']));

