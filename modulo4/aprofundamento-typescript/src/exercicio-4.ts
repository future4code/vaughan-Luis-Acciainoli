
type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// a  - tsc exercicio-4.ts 
// b - tsc src/exercicio-4.ts  
// c - tsc exercicio.ts exercicio2.ts exercicio3.ts

//no tsconfig pelo tsc a versão do ecmascript está no 5, 