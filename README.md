# Estudos de JavaScript

<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript Logo" width="120"/>

Este repositório reúne exemplos práticos dos principais conceitos de JavaScript, organizados em pastas temáticas. Cada pasta contém arquivos com explicações e exemplos comentados para facilitar o aprendizado.

---

## Estrutura do Projeto

### tipos-de-dados
Conceitos de tipos primitivos e objetos em JavaScript.
**Exemplo:**
```js
let nome = "Maria"; // String
let idade = 25; // Number
let aprovado = true; // Boolean
let frutas = ["maçã", "banana", "uva"]; // Array
let pessoa = { nome: "Eduardo", idade: 25 }; // Object
```
Veja mais em [tipos-de-dados/A02M01.js](tipos-de-dados/A02M01.js).

---

### operadores
Demonstração dos operadores aritméticos, de comparação, lógicos, atribuição, unários, ternário, string e bitwise.
**Exemplo:**
```js
let soma = 5 + 3; // 8
let maior = 10 > 5; // true
let status = (idade >= 18) ? "adulto" : "menor";
let saudacao = "Olá, " + "mundo!";
```
Veja exemplos em [operadores/A01M02.js](operadores/A01M02.js), [operadores/A06M02.js](operadores/A06M02.js), [operadores/A07M02.js](operadores/A07M02.js).

---

### objetos
Como criar, acessar e manipular objetos e métodos.
**Exemplo:**
```js
let carro = { marca: "Ford", modelo: "Fusion", ano: 2020 };
console.log(carro.marca); // "Ford"
let pessoa = {
  nome: "Nicolas",
  saudacao: function () { return "Oi, eu sou " + this.nome; }
};
console.log(pessoa.saudacao());
```
Veja mais em [objetos/A01M05.js](objetos/A01M05.js).

---

### vetores-arrays
Trabalhando com arrays e seus métodos.
**Exemplo:**
```js
let numeros = [1, 2, 3, 4, 5];
numeros.push(6); // [1,2,3,4,5,6]
let dobrados = numeros.map(x => x * 2); // [2,4,6,8,10]
let maioresQueTres = numeros.filter(x => x > 3); // [4,5]
```
Veja mais em [vetores-arrays/A02M04.js](vetores-arrays/A02M04.js).

---

### strings
Manipulação de textos e métodos de string.
**Exemplo:**
```js
let saudacao = "Olá, mundo!";
let saudacaoMaiuscula = saudacao.toUpperCase(); // "OLÁ, MUNDO!"
let saudacaoReplace = saudacao.replace("mundo", "JavaScript"); // "Olá, JavaScript!"
```
Veja mais em [strings/A02M03.js](strings/A02M03.js).

---

### estruturas-condicionais
Controle de fluxo com if/else, switch e operador ternário.
**Exemplo:**
```js
if (x > 0) {
  console.log("x é positivo");
} else {
  console.log("x não é positivo");
}
switch (cor) {
  case "vermelho": console.log("Pare!"); break;
  case "verde": console.log("Siga!"); break;
}
let status = (idade >= 18) ? "Adulto" : "Menor";
```
Veja mais em [estruturas-condicionais/A01M06.js](estruturas-condicionais/A01M06.js).

---

### estruturas-de-repeticao
Loops: for, while, for...in, for...of, break e continue.
**Exemplo:**
```js
for (let i = 0; i < 5; i++) { console.log(i); }
let lista = [3, 5, 7];
for (let valor of lista) { console.log(valor); }
for (let chave in pessoa) { console.log(chave + ": " + pessoa[chave]); }
```
Veja mais em [estruturas-de-repeticao/A04M07.js](estruturas-de-repeticao/A04M07.js).

---

### funcoes
Declaração de funções, expressões, arrow functions e parâmetros.
**Exemplo:**
```js
function somar(a, b) { return a + b; }
const multiplicar = (x, y) => x * y;
let dobrados = [1,2,3].map(n => n * 2);
```
Veja mais em [funcoes/A02M08.js](funcoes/A02M08.js).

---

### funcoes-ordem-maior
Funções que recebem ou retornam outras funções (callbacks).
**Exemplo:**
```js
let soma = [1, 2, 3, 4, 5].reduce((acumulador, atual) => acumulador + atual, 0); // 15
let maioresQueDez = [5, 10, 15, 20].filter(x => x > 10); // [15, 20]
```
Veja mais em [funcoes-ordem-maior/A01M09.js](funcoes-ordem-maior/A01M09.js).

---

### poo
Programação orientada a objetos: protótipos, classes, herança.
**Exemplo:**
```js
class Retangulo {
  constructor(altura, largura) { this.altura = altura; this.largura = largura; }
  area() { return this.altura * this.largura; }
}
let ret = new Retangulo(10, 5);
console.log(ret.area()); // 50
```
Veja mais em [poo/classes/A01M11.js](poo/classes/A01M11.js).

---

### dom
Manipulação do DOM: seleção de elementos, alteração de conteúdo, eventos.
**Exemplo:**
```js
const btn = document.getElementById("botao");
btn.addEventListener("click", () => { alert("Botão clicado!"); });
document.getElementById("titulo").innerText = "Estudando a DOM";
```
Veja mais em [dom/manipulando-dom/A02M13.js](dom/manipulando-dom/A02M13.js).

---

## Como usar

Abra os arquivos `.js` para ver exemplos comentados e execute os arquivos `index.html` de cada pasta para testar os códigos no navegador.

---

Explore cada pasta para aprender e praticar os fundamentos