// Apesar de JS modernamente ter class, internamente tudo ainda é protótipo. 
// A programação orientada a objetos em JS envolve criar objetos (ou classes) que encapsulam dados e comportamentos relevantes ao problema.

// Introduzidas no ES2015, as classes são syntactic sugar sobre o sistema de protótipos. 
// Elas facilitam criar objetos e lidar com herança. A sintaxe básica:

class Retangulo {
  constructor(altura, largura) {
    this.altura = altura
    this.largura = largura
  }
  area() {
    return this.altura * this.largura
  }
}
let ret = new Retangulo(10, 5)
console.log(ret.area()) // 50

// Aqui, class Retangulo define um template. 
// O constructor é chamado ao criar instâncias com new. 
// O método area fica disponível a cada instância. 
// Note que declarações de classe não são hoisted (você deve declarar antes de usar)


// Para herança usamos extends e super:

class Animal {
    constructor(nome) {
        this.nome = nomes
    }

    falar() {
        console.log(this.nome + " faz um som.")
    }
}
class Cachorro extends Animal {
    falar() {
        console.log(this.nome + " Au Au")
    }
}
let dog = new Cachorro("JavaScript")
dog.falar()

// Cachorro herda de Animal, podendo sobrepor métodos (override). 
// As classes fornecem uma forma mais clara e familiar de OOP, mas saiba que internamente são baseadas em protótipos