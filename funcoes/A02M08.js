// Arrow functions são funções com sintaxe mais curta, especialmente úteis para funções simples.

const multiplicar = (x, y) => x * y // função que multiplica x e y
console.log(multiplicar(4, 5)) // imprime 20

// Exemplo 1: Dobrar valores de um array
let numeros = [1, 2, 3];
let dobrados = numeros.map(n => n * 2); // [2, 4, 6]
console.log(dobrados);

// Exemplo 2: Filtrar números pares
let pares = numeros.filter(n => n % 2 === 0); // [2]
console.log(pares);

// Exemplo 3: Somar todos os valores de um array
let soma = numeros.reduce((total, n) => total + n, 0); // 6
console.log(soma);

// Exemplo 4: Função sem parâmetros
let saudacao = () => console.log("Olá!");
saudacao();