// ===== MANIPULAÇÃO DE ARRAYS =====
const frutas = ["maçã", "banana"];
frutas.push("laranja");
console.log(frutas); // ["maçã", "banana", "laranja"]

frutas.pop();
console.log(frutas); // ["maçã", "banana"]

const numeros = [1, 2, 3];
const dobrados = numeros.map(num => num * 2);
console.log(dobrados); // [2, 4, 6]

const pares = numeros.filter(num => num % 2 === 0);
console.log(pares); // [2]

const soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
console.log(soma); // 6

// ===== MANIPULAÇÃO DE OBJETOS =====
const pessoa = { 
  nome: "João",
  idade: 25,
  sexo: 'feminino'
  };
console.log(Object.keys(pessoa)); // ["nome", "idade"]
console.log(Object.values(pessoa)); // ["João", 25]
console.log(Object.entries(pessoa)); // [["nome", "João"], ["idade", 25]]
const valor = Math.round(4.6)
console.log(valor)
// ===== MANIPULAÇÃO DE NÚMEROS =====
console.log(Math.random()); // Exemplo: 0.1234562
console.log(Math.round(4.6)); // 5
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.min(1, 2, 3)); // 1
