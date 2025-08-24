// JavaScript suporta OOP de forma prototípica. 
// Diferente de linguagens com classes nativas, JS é baseado em protótipos. 
// Cada objeto pode herdar propriedades de outro objeto protótipo. 
// Por exemplo, considere uma função construtora:

function Pessoa(nome, idade) {
  this.nome = nome
  this.idade = idade
}
Pessoa.prototype.falar = function() {
  console.log("Eu sou " + this.nome)
}

let p = new Pessoa("João", 30);
p.falar()

/*
    Aqui, Pessoa é uma função construtora. 
    Ao criar um novo objeto com new Pessoa(), ele herda de Pessoa.prototype, 
    que contém o método falar. Isso permite criar objetos com propriedades e métodos compartilhados.
*/

// Em JS, todo objeto pode ter funções como métodos e propriedades normais. 
// Quando um método é chamado, o this dentro dele refere-se ao objeto que chamou, não ao protótipo onde foi definido

Pessoa.prototype.aniversario = function() {
  this.idade++
  console.log(this.nome + " agora tem " + this.idade + " anos.")
}

p.aniversario() // João agora tem 31 anos.

// Criando outro objeto
let maria = new Pessoa("Maria", 25)
maria.falar() // Eu sou Maria
maria.aniversario() // Maria agora tem 26 anos

// Verificando herança de protótipo
console.log(maria instanceof Pessoa); // true

// Adicionando propriedade dinâmica
maria.profissao = "Engenheira"
console.log(maria.profissao) // Engenheira

// Todos objetos criados com Pessoa compartilham os métodos do protótipo
console.log(typeof maria.falar) // function