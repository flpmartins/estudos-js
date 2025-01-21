// ===== MANIPULAÇÃO AVANÇADA DE ARRAYS =====
const numerosOrdenados = [5, 3, 8, 1];
numerosOrdenados.sort((a, b) => a - b);
console.log(numerosOrdenados); // [1, 3, 5, 8]

numeros.forEach((num, index) => {
  console.log(`Número ${index + 1}: ${num}`);
});

console.log(numeros.some(num => num > 2)); // true
console.log(numeros.every(num => num > 0)); // true

const numeroPar = numeros.find(num => num % 2 === 0);
console.log(numeroPar); // 2

// ===== MANIPULAÇÃO AVANÇADA DE OBJETOS =====
const { nome, idade } = pessoa;
console.log(nome, idade); // "João", 25

const novaPessoa = { ...pessoa, cidade: "São Paulo" };
console.log(novaPessoa); // { nome: "João", idade: 25, cidade: "São Paulo" }

// ===== Exemplo de Function e Arrow Function com Async e Array =====
async function buscarUsuario(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, nome: `Usuário ${id}` });
    }, 1000);
  });
}

const buscarUsuarios = async (ids) => {
  const usuarios = await Promise.all(ids.map(async id => await buscarUsuario(id)));
  return usuarios;
};

const idsUsuarios = [1, 2, 3, 4, 5];

const processarUsuarios = async () => {
  const idsPares = idsUsuarios.filter(id => id % 2 === 0);
  console.log("IDs Pares:", idsPares);

  const usuariosPares = await buscarUsuarios(idsPares);
  console.log("Usuários pares:", usuariosPares);
};

processarUsuarios();
