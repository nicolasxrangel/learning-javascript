// for...of: Introduzido no ES6, itera sobre valores de um iterável 
// (array, string, etc). Sintaxe:

let lista = [3, 5, 7];
for (let valor of lista) {
  console.log(valor); // 3, 5, 7
}

// para de


let nomes = ["Ana", "Bruno", "Carlos"];
for (let nome of nomes) {
  console.log("Bem-vindo, " + nome + "!");
}

// percorre cada valor do array nomes e imprime uma mensagem de boas-vindas. Repete para cada nome.

// Também pode ser usado com strings:
let palavra = "Java";
for (let letra of palavra) {
  console.log(letra); // J, a, v, a
}

// percorre cada valor do array lista e imprime. Repete para cada elemento.
