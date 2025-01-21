// ===== DECLARAÇÃO DE VARIÁVEIS =====

// Usando var (não recomendado)
var dadoVar;
dadoVar = 1;
var dadoVar = 2; // Redeclaração permitida

// Usando let
let dadoLet;
dadoLet = 1;
// let dadoLet = 2; // Erro: já foi declarado no mesmo escopo

// Usando const
const dadoConst = 1;
// dadoConst = 2; // Erro: atribuição não permitida

// ===== MANIPULAÇÃO DE STRINGS =====
const texto = "olá";
console.log(texto.toUpperCase()); // "OLÁ"
console.log(texto.toLowerCase()); // "olá"

const frase = "Eu adoro JavaScript!";
console.log(frase.includes("JavaScript")); // true

const fraseDividida = "A,B,C";
console.log(fraseDividida.split(",")); // ["A", "B", "C"]

const fraseNova = "Eu gosto de maçãs.";
const fraseAtualizada = fraseNova.replace("maçãs", "laranjas");
console.log(fraseAtualizada); // "Eu gosto de laranjas."

const textoEspacos = "   JavaScript   ";
console.log(textoEspacos.trim()); // "JavaScript"

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

const numeroPar = numeros.find(num => num % 2 === 0);
console.log(numeroPar); // 2

console.log(numeros.some(num => num > 2)); // true
console.log(numeros.every(num => num > 0)); // true

const numerosOrdenados = [5, 3, 8, 1];
numerosOrdenados.sort((a, b) => a - b);
console.log(numerosOrdenados); // [1, 3, 5, 8]

numeros.forEach((num, index) => {
  console.log(`Número ${index + 1}: ${num}`);
});

// ===== MANIPULAÇÃO DE OBJETOS =====
const pessoa = { nome: "João", idade: 25 };
console.log(Object.keys(pessoa)); // ["nome", "idade"]
console.log(Object.values(pessoa)); // ["João", 25]
console.log(Object.entries(pessoa)); // [["nome", "João"], ["idade", 25]]

const { nome, idade } = pessoa;
console.log(nome, idade); // "João", 25

const novaPessoa = { ...pessoa, cidade: "São Paulo" };
console.log(novaPessoa); // { nome: "João", idade: 25, cidade: "São Paulo" }

// ===== MANIPULAÇÃO DE NÚMEROS =====
console.log(Math.random()); // Exemplo: 0.123456
console.log(Math.round(4.6)); // 5
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.min(1, 2, 3)); // 1

// ===== Exemplo de IF, ELSE IF, ELSE =====
const numero = 10;
if (numero > 0) {
  console.log("O número é positivo.");
} else if (numero < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é zero.");
}

// ===== Exemplo de TEMPLATE STRING =====
const mensagem = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
console.log(mensagem);

// ===== Controle de Fluxo com SWITCH =====
const cor = "vermelho";
switch (cor) {
  case "vermelho":
    console.log("Pare!");
    break;
  case "amarelo":
    console.log("Atenção.");
    break;
  case "verde":
    console.log("Siga.");
    break;
  default:
    console.log("Cor inválida.");
}

// ===== Exemplo de Function e Arrow Function com Async e Array =====

// Função assíncrona normal para simular uma chamada assíncrona (como API)
async function buscarUsuario(id) {
  // Simula um tempo de espera para uma "chamada à API"
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, nome: `Usuário ${id}` });
    }, 1000);
  });
}

// Arrow Function para processar múltiplos IDs de usuários
const buscarUsuarios = async (ids) => {
  const usuarios = await Promise.all(ids.map(async id => await buscarUsuario(id)));
  return usuarios;
};

// Array de IDs para buscar
const idsUsuarios = [1, 2, 3, 4, 5];

// Filtrando apenas IDs pares e buscando os dados correspondentes
const processarUsuarios = async () => {
  const idsPares = idsUsuarios.filter(id => id % 2 === 0);
  console.log("IDs Pares:", idsPares);

  const usuariosPares = await buscarUsuarios(idsPares);
  console.log("Usuários pares:", usuariosPares);
};

// Chamando a função principal
processarUsuarios();
