/* Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.


const valor1 = Number(process.argv[2]);
const operacao = process.argv[3];
const valor2 = Number(process.argv[4]);


const calculaValores = (valor1, operacao, valor2) => {
    if (operacao === '+') {
        return valor1 + valor2;
     }
    else if (operacao === '-') {
         return valor1 - valor2;
     } 
     else if (operacao === 'x') {
         return valor1 * valor2;
     } 
     else if (operacao === '/') {
         return valor1 / valor2;
     } 
     else {
         return 'Por favor, digite a operação corretamente.';
     }
 }



 console.log(calculaValores(valor1, operacao, valor2));
 */