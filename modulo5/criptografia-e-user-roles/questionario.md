

## Exercício 1

- O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?

- Round: Quantidade  de vezes que o hash será executado

- Salt: Salt é um valor randomico que deve ser diferente a cada calculo, assim o resultado muito muito dificilmente sera o mesmo.

- Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por criptografar uma string usando o bcryptjs.

```
 const generateHash = async (pass: string): Promise<string> => {
​    const round = Number(process.env.BCRYPT_COST);
​    const salt = await bcrypt.genSalt(round);
​    const result = await bcrypt.hash(pass, salt);
​    return result;
​    };
```



- Agora, crie a função que verifique se uma string é correspondente a um hash, use a função compare do bcryptjs

```
 const compareHash = async (pass: string, hash: string): Promise<boolean> => {
​    const result = await bcrypt.compare(pass, hash);
​    return result;
​    }
```

## Exercício 2:

- Na aula de ontem, implementamos os endpoints de signup e login sem utilizar a criptografia. Vamos agora colocar isso. A ideia é simples: no cadastro, antes de salvar o usuário no banco, temos que criptografar a senha, para que, no banco, não fique a senha em si. Já, no login, em vez de comparar a senha enviada diretamente com a salva no banco, usaremos a biblioteca de Hash para isso. 


