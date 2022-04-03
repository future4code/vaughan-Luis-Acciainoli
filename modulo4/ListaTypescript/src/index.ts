

const separar = (nome: string, dataNascimento: string): string => {
  const [dia, mes, ano] = dataNascimento.split("/");
  const frase: string = `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`;
  return frase;
};
console.log(separar("Pedro", "24/03/1994"));

const tipoVariavel = (variavel: any): void => {
  console.log(typeof variavel);
};
tipoVariavel(false);


enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type filme = {
  nome: string;
  anoLancamento: number;
  genero: GENERO;
  pontuacao?: number; //? opcional
};

const filmes = (
  nome: string,
  ano: number,
  genero: GENERO,
  nota?: number //? opcional
): filme => {
  if (nota) { //checa se existe nota, caso não só emprime as outras opções
    return {
      nome: nome,
      anoLancamento: ano,
      genero: genero,
      pontuacao: nota
    };
  } else {
    return {
      nome: nome,
      anoLancamento: ano,
      genero: genero
    };
  }
};
console.log(filmes("Clube da Luta", 1999, GENERO.ACAO, 91));



enum SETORES {
  MARKETING = "marketing",
  VENDAS = "vendas",
  FINANCEIRO = "financeiro"
}

type pessoasColaboradoras = {
  nome: string;
  salário: number;
  setor: SETORES;
  presencial: boolean;
};

const listaColaboradores: pessoasColaboradoras[] = [
  { nome: "Marcos", salário: 2500, setor: SETORES.MARKETING, presencial: true },
  { nome: "Maria", salário: 1500, setor: SETORES.VENDAS, presencial: false },
  { nome: "Saulo", salário: 2200, setor: SETORES.FINANCEIRO, presencial: true },
  { nome: "João", salário: 2800, setor: SETORES.MARKETING, presencial: false },
  { nome: "Josué", salário: 5500, setor: SETORES.FINANCEIRO, presencial: true },
  { nome: "Natalia", salário: 4700, setor: SETORES.VENDAS, presencial: true },
  { nome: "Paola", salário: 3500, setor: SETORES.MARKETING, presencial: true }
];

const retornaMkt = (lista: pessoasColaboradoras[]): pessoasColaboradoras[] => {

  const filtro: pessoasColaboradoras[] = lista.filter((colaborador) => {
    return colaborador.setor === SETORES.MARKETING && colaborador.presencial;
  });
  return filtro;
  
};
console.log(retornaMkt(listaColaboradores));



enum ROLE {
  ADMIN = "admin",
  USER = "user"
}

type user = {
  name: string;
  email: string;
  role: ROLE;
};

const usuarios: user[] = [
  { name: "Rogério", email: "roger@email.com", role: ROLE.USER },
  { name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN },
  { name: "Aline", email: "aline@email.com", role: ROLE.USER },
  { name: "Jéssica", email: "jessica@email.com", role: ROLE.USER },
  { name: "Adilson", email: "adilson@email.com", role: ROLE.USER },
  { name: "Carina", email: "carina@email.com", role: ROLE.ADMIN }
];

const retornaEmailAdmin = (list: user[]): string[] => {

  const email: string[] = list.filter((user) => user.role === ROLE.ADMIN)
    .map((user) => user.email);
  return email;
};

console.log(retornaEmailAdmin(usuarios));


type conta = {
  cliente: string;
  saldoTotal: number;
  debitos: number[];
};

const listaClientes: conta[] = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] }
];

const retornaNegativos = (lista: conta[]): conta[] => {
  lista.forEach((cliente) => {  //percorrer todos os clientes e somar debitos com reduce
    const totalDebitos = cliente.debitos.reduce((a, b) => a + b, 0);
    cliente.saldoTotal = cliente.saldoTotal - totalDebitos;
    cliente.debitos = [];
  });
  const contasNegativas = lista.filter((conta) => conta.saldoTotal < 0);
  return contasNegativas;
};
 console.log(retornaNegativos(listaClientes));





const ajustaPreco = (preco: number): string => {
  const valorAjustado: string = preco.toFixed(2).replace(".", ",");
  return "R$ " + valorAjustado;
};

type produtos = {
  nome: string;
  quantidade: number;
  valorUnitario: number | string;
};

const estoque: produtos[] = [
  { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.04 },
  { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
  { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
  { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
  { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
  { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
  { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
];

const correcaoEstoque = (lista: produtos[]): produtos[] => {
  lista.forEach(
    (item) => (item.valorUnitario = ajustaPreco(item.valorUnitario as number))
  );
  const ordenada: produtos[] = lista.sort(
    (a, b) => a.quantidade - b.quantidade
  );
  return ordenada;
};


console.log(correcaoEstoque(estoque));

// exercicio 8 ainda tenho que aprender a manipular data :/ 

const recebePalavra = (palavra: string): number => {
  const qtdLetras = palavra.length;

  if (qtdLetras === 0) {
    return 1;
  }

  let total = 1;

  for (let i = qtdLetras; i > 0; i--) {
    total = total * i;
  }

  return total;
};
console.log(recebePalavra("roberto"));

//exercicio 10 ainda não sei como Resolver

const converter = (primeiroNumero: number): string => {

  const numeroRomano: { [key: string]: number } = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };


  let romanos = "",
    i;
  for (i in numeroRomano) {
    while (primeiroNumero >= numeroRomano[i]) {
      romanos = romanos + i;
      primeiroNumero = primeiroNumero - numeroRomano[i];
    }
  }
  return romanos;
};
console.log(converter(1994));

