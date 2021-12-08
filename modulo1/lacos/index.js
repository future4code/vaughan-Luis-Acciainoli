/* 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
    
    
    let valor = 0
    for(let i = 0; i < 5; i++) {
      valor += i
    }
    console.log(valor)
    
     */

/* R = Enquanto i for menos do que 5 o laço vai ficar incrementando o valor de i e retornar esse valor via console.log
 */

/* 2. Leia o código abaixo:
    
    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
      if (numero > 18) {
    		console.log(numero)
    	}
    }
    
    a) O que vai ser impresso no console?
    R = O console vai imprimir todos numeros maior que 18 da lista
    b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso? */
    /* R = Utilizando o keys e no console log trazendo o index */

/* 3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?
    
    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
      let linha = ""
      for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
      }
      console.log(linha)
      quantidadeAtual++
    }
    *
    **
    ***
    ****
     */


   /*  - **Exercícios de escrita de código**
    1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.  */
        
       /*  a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
        b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
        c) Por fim, imprima o array com os nomes dos bichinhos no console */

    
  /*      function getAnimal(){
           var qtdAnimal = Number(prompt("Quantos animais estimação você tem?"));

            if (qtdAnimal === 0 ){
                console.log("Que pena! Você pode adotar um pet!");
            }
            else if (qtdAnimal > 0){
                var pet = []

                for(var i = 0; i < qtdAnimal; i++){
                pet.push(prompt("Digite o nome do pet " + (i + 1) ));
                if(pet[i] == ""){
                    alert("Por favor insira corretamente o nome do pet")
                }
                
            }
            console.log(pet);

            }
            else{
                getAnimal();
            }
       }
       getAnimal();



         */


        
     

        
    /* 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. 
          Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas: */
        
      
          function getListaNumeros(n) {
            let lista = [];
            for (let i = 0; i < n; i++) {
            lista[i] = parseInt(Math.random()* 100 ,10);
            console.log(lista[i]);
            }
            
        }
        function getListaNumeros10(n) {
            let lista = [];
            for (let i = 0; i < n; i++) {
            lista[i] = parseInt(Math.random()* 100 ,10) / 10;
            console.log(lista[i]);
            }
            
        }
        function getListaPares(n) {
            let listaGeral = [];
            let listaPar= [];
            for (let i = 0; i < n ; i++) {
                listaGeral[i] = parseInt(Math.random()* 100 ,10);
            }

            for( let i = 0; i<listaGeral.length; i++) {
                if((listaGeral[i] % 2) === 0 ){
                    listaPar.push(listaGeral[i]);
                    
                }
            }
                return console.log(listaPar); 
        }

        function getListaString(n) {
            let lista = [];
            for (let i = 0; i < n; i++) {
            lista[i] = parseInt(Math.random()* 100 ,10);
            }
            for (let i = 0; i <lista.length; i++) {
                console.log(`O elemento do index ${i} é: ${lista[i]} \n`)
            }
            
        }

        function getListaMaiorMenor(n) {
            let lista = [];
           
           
            for (let i = 0; i < n; i++) {
            lista[i] = parseInt(Math.random()* 100 ,10);
            }

            let maior = 0;
            let menor = lista[0];
            
            console.log(lista);
            for (let i = 0; i <lista.length; i++) {
                if(lista[i] > maior ){
                    maior = lista[i];
                }
            }

            for (let i = 0; i <lista.length; i++) {
                if(lista[i] < menor ){
                    menor = lista[i];
                }
            }
          
          
            
            console.log(maior);
            console.log(menor);
            
        }

        getListaNumeros(10);
        getListaNumeros10(10);
        getListaPares(10);
        getListaString(12);
        getListaMaiorMenor(5);


/*         a) Escreva um programa que **imprime** cada um dos valores do array original.
        b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
        c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
        d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
        e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
        
        */
      /*  - Exemplo de saídas esperadas
            
            // Este array será usado para exemplificar as respostas de todos os itens
            const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
            
            // Resposta item a.
            80
            30
            130
            40
            60
            21
            70
            120
            90
            103
            110
            55
            
            // Resposta item b.
            8
            3 
            13
            4
            6
            2.1
            7 
            12
            9
            10.3
            11 
            5.5
            
            // Resposta item c.
            [80, 30, 130, 40, 60, 70, 120, 90, 110] 
            
            // Resposta item d.
            [ 'O elemento do índex 0 é 80',
              'O elemento do índex 1 é 30',
              'O elemento do índex 2 é 130',
              'O elemento do índex 3 é 40',
              'O elemento do índex 4 é 60',
              'O elemento do índex 5 é 21',
              'O elemento do índex 6 é 70',
              'O elemento do índex 7 é 120',
              'O elemento do índex 8 é 90',
              'O elemento do índex 9 é 103',
              'O elemento do índex 10 é 110',
              'O elemento do índex 11 é 55' ]
            
            // Resposta e.
            "O maior número é 130 e o menor é 21"
  */