// Objetos são coleções de pares chave: valor (propriedades).
// Cada chave (string ou símbolo) associa-se a um valor (qualquer tipo).
// Pense em um objeto como um registro com campos nomeados. Exemplo de objeto literal:

let carro = {
  marca: "Ford",
  modelo: "Fusion",
  ano: 2020,
  cor: "preto",
};

// Acesse propriedades com notação de ponto (carro.marca) ou colchetes (carro["modelo"]).

console.log(carro.marca); // "Ford"
console.log(carro["ano"]); // 2020

// Você pode criar objetos vazios e adicionar propriedades depois:

let obj = {};
obj.nome = "Ana"; // adiciona propriedade 'nome'
obj["idade"] = 25; // adiciona propriedade 'idade'

// Propriedades podem até conter funções (métodos):

let pessoa = {
  nome: "Nicolas",
  saudacao: function () {
    return "Oi, eu sou " + this.nome;
  },
};
console.log(pessoa.saudacao()); // "Oi, eu sou Nicolas"

/*
    Aqui saudacao é uma função; ao ser chamada (pessoa.saudacao()), o this.nome 
    dentro dela refere-se a pessoa. Em JS, qualquer função atribuída a objeto é tratada 
    como método, e this aponta para o objeto que chamou
*/

// Objetos também podem ser aninhados:

let aluno = {
  nome: "João",
  endereco: { rua: "Av. A", numero: 123 },
}
console.log(aluno.endereco.rua) // "Av. A"


// Para ver um exemplo completo, veja este objeto com objeto aninhado

var minhaHonda = {
  cor: "vermelho",
  rodas: 4,
  motor: { cilindros: 4, tamanho: 2.2 },
}

// m resumo, objetos agrupam dados e funcionalidade em propriedades nomeadas. 
// Você acessa cada propriedade como obj.prop (ou obj["prop"]). 
// Objetos são fundamentais em JavaScript para modelar dados complexos.

