# Banco de Dados e Introdução a SQL

Entrega dos exercícios de fixação sobre SQL

## Exercícios

  

 ### Exercício 1

    
    Começaremos pela tabela de atores. Nós vamos guardar as seguintes informações: id, nome, salário, data de nascimento e sexo
    
    Abaixo está a query que cria essa tabela no MySQL
   
 
       CREATE TABLE Actor (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR (255) NOT NULL,
        salary FLOAT NOT NULL,
        birth_date DATE NOT NULL,
        gender VARCHAR(6) NOT NULL
        );
    

 

    
    a. Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.
    
> VARCHAR - **STRING COM DELIMITAÇÃO DE CARACTERES DECLARADO**
> DATE - **FORMATO DE DATA**
> NOT NULL - **O CAMPO NÃO PODE SER NULO/VAZIO**
> PRIMARY KEY - **O CAMPO É A CHAVE PRIMARIA DA TABELA**

   b.
 O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.
    

> SHOW DATABASES - **RETORNA TODAS AS BASES DO BANCO DE DADOS**
> SHOW TABLES - **RETORNA AS TABELAS EXISTENTES NO BANCO DE DADOS**

c.

   O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando `DESCRIBE Actor` e explique os resultados.

> O comando é útil para verificação dos tipos e propriedades das tuplas da entidade.

### Exercício 1
    
    O próximo passo é colocar dados nessa tabela. Vamos começar criando a linha de um ator brasileiro muito famoso.
    
    ```sql
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
      "001", 
      "Tony Ramos",
      400000,
      "1948-08-25", 
      "male"
    );
    
    ```
    
    Atente-se a 3 fatos nessa query:
    
    1.  A ordem dos valores (`VALUES`) é definida pela lista colocada depois do nome da tabela (`ACTOR`): `(id, name, salary, birth_date)`.
    2.  Os valores `VARCHAR` (strings) devem ser indicados com `"`
    3.  As datas seguem o padrão: `YYYY-MM-DD`
    
a. Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963_
	
	

> 	INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES(  
> "002",    "Glória Pires",   1200000,   "1963-08-23",    "female" );

   
    
 b.  Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu._
    

> Código de Erro:1062. Entrada duplicada "002" para chave primaria. **Quando tentamos colocar uma valor duplicado no campo que é uma chave primaria o sgbd vai sempre retornar erro de integridade**


  


 

  Tente usar as queries abaixo. Você vai reparar que elas vão gerar um
   erro. Anote as mensagens de erro, traduza (pode usar o Google
   Tradutor diretamente) e explique porque esses erros aconteceram. Por
   fim, corrija individualmente cada query para que funcione, teste o
   comando e anote-o também como resposta

    
    
  c. 
        
        
        INSERT INTO Actor (id, name, salary)
        VALUES(
          "003", 
          "Fernanda Montenegro",
          300000,
          "1929-10-19", 
          "female"
        );
        
        

> Código de Erro: 1136 O número de colunas não corresponde ao valor na linha 1 
>    **INSERT INTO Actor (id, name, salary, birth_date, gender)
        VALUES(
          "003", 
          "Fernanda Montenegro",
          300000,
          "1929-10-19", 
          "female"
        );**
    
       

 d. 

        INSERT INTO Actor (id, salary, birth_date, gender)
        VALUES(
          "004",
          400000,
          "1949-04-18", 
          "male"
        );    
                
 

> Código de Erro:1364 - O campo "name" não tem valor padrão. Como não foi explicitado a coluna name o sgbd retornou erro por não ter nenhum valor padrão definido para este campo.
> **INSERT INTO Actor (id, name, salary, birth_date, gender))
        VALUES(
          "004",
         "nome",
          400000,
          "1949-04-18", 
          "male"
        );**   
                

   

   e.  
        
        
        INSERT INTO Actor (id, name, salary, birth_date, gender)
        VALUES(
          "005", 
          "Juliana Paes",
          719333.33,
          1979-03-26, 
          "female"
        );

> Código de Error: 1292. Valor da data incorreto: "1950" para a coluna "birth_date" na linha 1.
> Como o valor de data não está com as aspas duplas o sgbd não consegue entender como um formato de data válido e retorna erro.
> **INSERT INTO Actor (id, name, salary, birth_date, gender)
        VALUES(
          "005", 
          "Juliana Paes",
          719333.33,
          "1979-03-26", 
          "female"
        );**

f.
    
 Por fim, crie mais um ator e mais uma atriz e prossiga para os próximos exercícios.

 ### Exercício 3
    
Com os dados criados, podemos nos aventurar nas queries de seleção de dados. Elas são indicadas pelo operador `SELECT`. Talvez a query mais famosa que existe é:

```sql
SELECT * FROM Actor

```


Ela faz com que se retornem todas as **colunas** (ou "informações") de todas as **linhas** (ou "entradas") da nossa tabela.

Se quisermos limitar as **colunas**, devemos indicar assim logo após o operador `SELECT`. Abaixo, está uma query que retorna somente o `id`e o `salário`de todos os atores

```sql
SELECT id, salary from Actor 

```

Agora, se quisermos colocar uma condição para retornar as **linhas** (entradas), devemos usar o operador `WHERE` e colocar a nossa condição que pode usar alguns operadores (`=`, `!=`, `>`, etc). Abaixo, está uma query que retorna somente o id e o nome dos atores.

```sql
SELECT id, name from Actor WHERE gender = "male"

```

a. Escreva uma query que retorne todas as informações das atrizes
	

    SELECT * FROM ACTOR
    WHERE gender ="female"

b. Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`

	SELECT salary from Actor
	WHERE name = "Tony Ramos"

c. Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.

    SELECT gender from Actor
    WHERE gender = "invalid"
	

> O banco vai retornar erro, pois não há. nenhum valor "invalid" cadastrado.

d. Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000

	SELECT id, name, salary from Actor
	WHERE salary <= 500000

e. Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta

    SELECT id, nome from Actor WHERE id = "002"

> Código de Error:1054. Coluna desconhecida "nome" na lista de campos. 
> Deveria ser "name" não "nome"

    SELECT id, name from Actor WHERE id = "002"
    
  ### Exercício 4
  
Para finalizar o nosso estudo nas tabelas de atores, vamos fazer uma query mais complexa. Queremos encontrar todos os atores e atrizes:

-   cujos nomes começam com "A" ou "J"; e
-   cujos salários são maiores do que R$300.000

Para fazer a primeira parte, vamos usar o comparador `LIKE`, que permite comparar strings. Para verificar se uma palavra começa com a letra "A", usamos a sintaxe: `LIKE "A%"` porque `%` indica uma string genérica. O operador "ou" é indicado por `OR`. Assim, a primeira condição é indicada por: `WHERE name LIKE "A%" OR name LIKE "J%"`.

Já a segunda parte é simples: `salary > 300000`. O que pode confundir é o operador lógico "e" (`AND`). A ideia aqui é que todos os atores terão o salário maior do que R$300.000, mas seus nomes poderão começar com o "A" ou "J". Dessa forma, a query vai ficar dessa forma (preste atenção nos parênteses):

```sql
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000

```

Assim como o `LIKE` existem os operadores:

-   `BETWEEN`: permite verificar se um valor está entre dois: `BETWEEN valor1 AND valor2`.
-   `NOT`: que indica uma negação de comparação. Pode ser usado antes de outros operadores como: `NOT LIKE`, `NOT BETWEEN`

a. Explique com as suas palavras a query acima
	

> A query vai retornar algum valor que contenha o nome com algo após de  A ou J e o salario maior que 300.000

b. Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00

    SELECT  * FROM Actor
    WHERE (name NOT LIKE "A%") AND salary > 350000

c. Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.

    SELECT * FROM Actor
    WHERE name LIKE "%G%" or LIKE "%g%"

d. Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00

   

     SELECT * FROM Actor
        WHERE (name LIKE "%A%" or "%a%" or "%g%" or "%G%") AND salary BETWEEN 350000 AND 900000

### Exercício 5
    
Terminamos de fazer um belo estudo sobre a tabela de Atores. 
Agora, você vai ficar mais independente. 

Precisamos criar a tabela de Filmes com as informações: **id**, **nome**, **sinopse**, **data de lançamento** e **avaliação** (que pode ser de **0** a **10**)
    
   a. Escreva a query que cria essa tabela. Para **sinopse**, utilize o tipo `TEXT`, pesquise sobre ele se precisar. 
   Explique a query resumidamente.
    
CREATE TABLE Filmes (
    id INT PRIMARY KEY,
    nome VARCHAR(300) NOT NULL UNIQUE,
    sinopse TEXT NOT NULL,
    avaliação ENUM("1","2","3","4","5","6","7","8","9","10") not null
    );
 

> A query tem como objetivo criar uma tabela de nome Filmes que contenha id do tipo int e chave primária, nome do tipo varchar com 300 caracteres e único, sinopse do tipo text por ser string longa e não nula, um capo para armazenar a data lançamento e em avaliação foi utilizado o ENUM para definir que os dados que poderiam ser gravados

 b. Crie 4 filmes com as seguintes informações:


 id: `001`
Título: `Se Eu Fosse Você`
Sinopse: `Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um
fenômeno inexplicável e trocam de corpos`
 Data de lançamento: `06/01/2006` 
 Avaliação: 7


id: `002`
Título: `Doce de mãe`
Sinopse: `Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha,anuncia que vai se casar e não poderá mais morar com ela`
Data de lançamento: `27/12/2012`
  Avaliação: 10

        
        
        
   id: `003`
   Título: `Dona Flor e Seus Dois Maridos`
Sinopse: `Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.`
 Data de lançamento: `02/11/2017`
 Avaliação: `8`
        
        
        

#### Pesquise algum filme brasileiro e crie ele na tabela


### Exercício 6
    
   Escreva uma query que:
    
   a. Retorne o id, título e avaliação a partir de um id específico;

       SELECT id, nome, avaliação from Filmes
       WHERE id = "001";
        

   b. Retorne um filme a partir de um nome específico;
	
	SELECT nome from Filmes
	WHERE nome = "Se eu Fosse Você";
    
   c. Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`
	
	

    SELECT id, nome, sinopse from Filmes
    	WHERE avaliação >= 7;
	
### Exercício 7
    
   Escreva uma query que:
    
   a. Retorna um filme cujo título contenha a palavra `vida`
   

    SELECT nome * from Filmes
    WHERE nome LIKE "%vida%";
    
   b. Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.


SELECT * FROM Filmes
WHERE (nome LIKE "%cidade%") OR (sinopse LIKE "%tropa%");

   c. Procure por todos os filmes que já tenham lançado
   
	

    SELECT * FROM Filmes
        WHERE data_nascimento  <= "2022-04-04"; 
    
escrevi nascimento errado :tada:

   d. Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.

    SELECT * FROM Filmes
    WHERE (data_nascimento  <= "2022-04-04") 
    AND (nome LIKE "%tropa%") 
    OR (sinopse LIKE "%tropa%")
    AND (avaliação > 7 );
