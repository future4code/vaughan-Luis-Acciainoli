/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


//Boas vindas ao usuario.

const boasVindas = () =>{
console.log("Boas vindas ao jogo de Blackjack!");
}

boasVindas();



if(confirm("Quer iniciar uma nova rodada?")){


   
let cartaTexto = [];
let cartaValor = [];

const sortearCartas = () => {
   
   for (let i = 0 ; i <= 3 ; i++){
      const carta = comprarCarta();
      cartaTexto[i] = carta.texto;
      cartaValor[i] = Number(carta.valor);
   }
}

sortearCartas();

let cartaUser = cartaValor[0];
let cartaUser2 = cartaValor[1];
let cartaNpc = cartaValor[2];
let cartaNpc2 = cartaValor[3];


function soma(a,b){

   let soma = a + b;
   return soma;
}

let somaUser = soma(cartaUser,cartaUser2);
let somaNpc = soma(cartaNpc,cartaNpc2);


const ImprimirResultado = () =>{
   console.log(`Usuário - cartas: ${cartaTexto[0]} ${cartaTexto[1]} - pontuação ${soma(cartaUser,cartaUser2)})`);
   console.log(`Computador - cartas: ${cartaTexto[2]} ${cartaTexto[3]} - pontuação ${soma(cartaNpc,cartaNpc2)})`);
}

ImprimirResultado();


function imprimirVencedor(){

if (somaUser === somaNpc){
   console.log("Empate!");
}
   else if (somaNpc < somaUser){
      console.log("O usuário ganhou!");
   }
      else{
         console.log("O computador ganhou!");
      }

   }

   imprimirVencedor();

  
}
else{
   console.log("O jogo acabou")
}








