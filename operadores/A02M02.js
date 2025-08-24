// Comparação: >, <, >=, <= (maior/menor) e ==, ===, !=, !== (igualdades). 
// Em especial, == compara valor (com conversão automática) e === compara valor e tipo. Exemplo: (5 === '5') é false, mas (5 == '5') é true.

let maior = 10 > 5;         // true
let menor = 3 < 7;          // true
let maiorOuIgual = 8 >= 8;  // true
let menorOuIgual = 4 <= 2;  // false

let igualValor = 5 == '5';      // true
let igualValorTipo = 5 === '5'; // false
let diferenteValor = 10 != '10'; // false
let diferenteValorTipo = 10 !== '10'; // true

