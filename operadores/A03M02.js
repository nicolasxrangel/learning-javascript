// Lógicos: && (E lógico), || (OU lógico), ! (Não). 
// Combina expressões booleanas. Por exemplo, (x > 0 && x < 10) é true quando x está entre 1 e 9.

let a = true;
let b = false;

let eLogico = a && b;    // false (só é true se ambos forem true)
let ouLogico = a || b;   // true (é true se pelo menos um for true)
let naoLogico = !a;      // false (inverte o valor booleano)

let exemplo = (5 > 2 && 3 < 4); // true
let outroExemplo = (10 < 5 || 8 > 3); // true
let negacao = !(7 === 7); // false

