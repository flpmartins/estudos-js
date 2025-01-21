// ===== DECLARAÇÃO DE VARIÁVEIS =====
var dadoVar;
dadoVar = 1;
var dadoVar = 2; // Redeclaração permitida

let dadoLet;
dadoLet = 1;
dadoLet = 10
// let dadoLet = 2; // Erro: já foi declarado no mesmo escopo

const dadoConst = 1;

// dadoConst = 2; // Erro: atribuição não permitida

// ===== MANIPULAÇÃO DE STRINGS =====
const texto = "olá";
console.log(texto.toUpperCase()); // "OLÁ"
console.log(texto.toLowerCase()); // "olá"

const frase = "Eu adoro JavaScript!";
console.log(frase.includes("JavaScript")); // true

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
const nome = "João";
const idade = 25;
const mensagem = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;

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


