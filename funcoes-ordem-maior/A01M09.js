// São funções que recebem outras funções como argumentos ou retornam funções. 
// Em JavaScript, funções são first-class, podendo ser passadas como parâmetro. 
// Exemplos práticos: métodos de array que aceitam callbacks.

// forEach(): Executa uma função para cada item do array.

[1, 2, 3].forEach(x => console.log(x * 2))
// 2, 4, 6

// map(): Cria um novo array aplicando uma função a cada item.
let numeros = [1, 4, 9]
let raizes = numeros.map(x => Math.sqrt(x))
// Math.sqrt() calcula a raiz quadrada de cada número
console.log(raizes)

// filter(): Cria um novo array com itens que passam num teste.
let valores = [5, 10, 15, 20]
let maioresQueDez = valores.filter(x => x > 10)
console.log(maioresQueDez)

// reduce(): reduz o array a um único valor usando uma função redutora. Por exemplo, somando todos os elementos.
let lista = [1, 2, 3, 4, 5]
let soma = lista.reduce((acumulador, atual) => {
    return acumulador + atual
}, 0) 
console.log(soma)

/*
    O que acontece a cada iteração:

    Iteração 1: acumulador é 0 (valorInicial), valorAtual é 1. O retorno é 0 + 1 = 1.
    Iteração 2: acumulador é 1 (o retorno da última iteração), valorAtual é 2. O retorno é 1 + 2 = 3.
    Iteração 3: acumulador é 3, valorAtual é 3. O retorno é 3 + 3 = 6.
    ...e assim por diante, até o final do array.
    
*/


