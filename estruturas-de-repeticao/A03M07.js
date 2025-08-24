// for...in: Itera sobre propriedades enumeráveis de um objeto. Sintaxe:

// for (let chave in objeto) {
//   console.log(chave + ": " + objeto[chave])
// }

// Percorre cada chave (nome da propriedade) do objeto.

let pessoa = {
  nome: "Carlos",
  idade: 28,
  cidade: "São Paulo"
};

for (let chave in pessoa) {
  console.log(chave + ": " + pessoa[chave])
}

// para dentro

// define uma variavel chave que recebe cada propriedade do objeto pessoa,
// e imprime o nome da chave e seu valor. Repete para cada propriedade do objeto.
