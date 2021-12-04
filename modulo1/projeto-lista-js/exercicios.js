// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {

  let altura = Number(prompt("Digite a altura do retangulo"));
  let largura = Number(prompt("Digite a largura do retangulo"));

  return console.log((altura * largura));
}



// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual"));
  let anoNascimento = Number(prompt("Digite o ano de nascimento"));
  let idade = anoAtual - anoNascimento;
  return console.log((idade));
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  peso = Number(peso);
  altura = Number(altura);
  let imc = (peso / (altura * altura));

  return imc;
}



// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui

  let nome = prompt("Digite o seu nome");
  let idade = Number(prompt("Digite a sua idade"));
  let email = prompt("Digite seu e-mail");

  return console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);


  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt('digite cor 1');
  let cor2 = prompt('digite cor 2');
  let cor3 = prompt('digite cor 3');
  let cores = [];
  cores.push(cor1,cor2,cor3);
  console.log(cores);

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  
  return (custo / valorIngresso);
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
  return string1.length === string2.length;

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0];

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1];

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  var aux = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = aux;
 
  
  return array;

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}