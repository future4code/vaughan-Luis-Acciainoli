//Exercícios de interpretação de código
    
    
   // 1. Leia o código abaixo:
        
/*         
        const respostaDoUsuario = prompt("Digite o número que você quer testar")
        const numero = Number(respostaDoUsuario)
        
        if (numero % 2 === 0) {
          console.log("Passou no teste.")
        } else {
          console.log("Não passou no teste.")
        }
       
         */
        /*  a) Explique o que o código faz. Qual o teste que ele realiza? 
            R: O código verifica se resto da divisão é igual a 0, caso sim, retorna passou no teste, caso não, não passou no teste. 
            b) Para que tipos de números ele imprime no console "Passou no teste"? 
            R: Números primos
            c) Para que tipos de números a mensagem é "Não passou no teste"?  
            R: Números pares */



  /*    2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
        
        
        let fruta = prompt("Escolha uma fruta")
        let preco
        switch (fruta) {
          case "Laranja":
            preco = 3.5
            break;
          case "Maçã":
            preco = 2.25
            break;
          case "Uva":
            preco = 0.30
            break;
          case "Pêra":
            preco = 5.5
            break; // BREAK PARA O ITEM c.
          default:
            preco = 5
            break;
        }
        console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
        
        
        a) Para que serve o código acima?
            Ele avalia a fruta recebvida na variavel fruta e retorna o valor da variaevel preco
        b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
        O preço da fruta Maçã é R$ 2.25
        c) Considere que um usuá.rio queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
        O código não irá parar e retornará o valor 5 para preço que o default
            */
  /*   3. Leia o código abaixo: 
        
        
        const numero = Number(prompt("Digite o primeiro número."))
        
        if(numero > 0) {
          console.log("Esse número passou no teste")
        	let mensagem = "Essa mensagem é secreta!!!"
        }
        
        console.log(mensagem)
        
        
        a) O que a primeira linha está fazendo?
            Pedindo para inserir um número pelo prompt, converte de string para number e depois carrega o valor na variavel numero
        b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
            Essa mensagem é secreta!!! | undefined
        c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. 
            O compilador não conseguira acessar o valor de mensagem */
/* 


            1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
            a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
            
            b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
            
            c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`,
             caso contrário, imprima `"Você não pode dirigir."` */

/* 
             let idade = Number(prompt("Digite sua idade"));

             if(idade > 18 ){
                console.log("Você pode dirigir");
             }
             else{
                 console.log("Você não pode dirigir");
             }
 */
             /* 2. Agora faça um programa que verifica que turno do dia um aluno estuda. 
             Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
             Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else */

    /*          function IncluirAluno(){
             let aluno = prompt("Digite seu nome");
             return aluno;
            }
            function IncluirTurno(){
            let turno = prompt("Digite M para matutino V para Vespertino ou N para Noturno").toUpperCase();  
            if(turno === "M"){
                console.log("Bom dia!");
            }
            else if(turno === "V"){
                console.log("Boa tarde!")
            }
            else if(turno === "N"){
                console.log("Boa noite!");
            }
            else{

                console.log("Opção invalida")
                IncluirTurno();
            }
            return turno;
            }

            IncluirAluno();
            IncluirTurno();
 */
/*             Repita o exercício anterior, mas utilizando a estrutura de switch case agora. */


/* 
function IncluirAluno(){
    let aluno = prompt("Digite seu nome");
    return aluno;
   }
   function IncluirTurno(){
   let turno = prompt("Digite M para matutino V para Vespertino ou N para Noturno").toUpperCase();  
   switch (turno) {
       case "M":
           console.log("Bom dia!");
        break;
        case "V":
            console.log("Boa tarde!");
        break;
        case "N":
            console.log("Boa noite!");
        break;
        default:
            IncluirTurno();
            break;

   }
   return turno;
   }

   IncluirAluno();
   IncluirTurno(); */



/*    4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você 

   se ele for do gênero fantasia 
   **e** se o ingresso está abaixo de 15 reais.

    Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso,
    então verifique se seu amigo ou amiga vai topar assistir o filme.
     Caso positivo, 
     imprima no console a mensagem: `"Bom filme!"`, 
     caso contrário, imprima `"Escolha outro filme :("`
 */
    const genero = prompt("Digite o genero do filme");
    const preco = Number(prompt("Digite o preço do ingresso"));

    if(genero === "fantasia" && preco < 15 ){
        console.log("Bom filme")
    }
    else{
        console.log("Escolha outro filme :(");
    }

