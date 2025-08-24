// Arrays têm muitos métodos úteis para adicionar, remover e processar elementos:

/*
    * push()/pop(): adiciona/ remove no fim. Ex.: arr.push(4), arr.pop().
    * unshift()/shift(): adiciona/ remove no início.
    * forEach(): executa função para cada elemento. Ex.: arr.forEach(x => console.log(x));.
    * map(): cria novo array aplicando uma função a cada elemento. Ex.: [1,2,3].map(x => x*2) resulta em [2,4,6].
    * filter(): cria novo array com elementos que passam num teste. Ex.: [5,10,15].filter(x => x>9) resulta em [10,15].
    * reduce(): reduz o array a um único valor usando uma função acumuladora. Ex.: [1,2,3].reduce((tot,x) => tot+x, 0) resulta em 6.
    * slice(), splice(), indexOf(), sort(), entre outros, para manipular arrays.
    Por exemplo, iterar multiplicando cada valor:
*/
let numeros = [1, 2, 3, 4, 5];

// Adicionando e removendo elementos
numeros.push(6);      // [1,2,3,4,5,6]
numeros.pop();        // [1,2,3,4,5]
numeros.unshift(0);   // [0,1,2,3,4,5]
numeros.shift();      // [1,2,3,4,5]

// forEach: imprime cada elemento
numeros.forEach(x => console.log(x));

// map: cria novo array com valores dobrados
let dobrados = numeros.map(x => x * 2); // [2,4,6,8,10]

// filter: filtra valores maiores que 3
let maioresQueTres = numeros.filter(x => x > 3); // [4,5]

// reduce: soma todos os valores
let soma = numeros.reduce((total, x) => total + x, 0); // 15

// slice: pega parte do array
let parte = numeros.slice(1, 3); // [2,3]

// splice: remove elementos a partir do índice 2
let removidos = numeros.splice(2, 1); // remove o elemento 3, numeros vira [1,2,4,5]

// indexOf: encontra o índice do valor 4
let indice = numeros.indexOf(4); // 2

// sort: ordena o array
let desordenados = [3, 1, 4, 1, 5, 9];
desordenados.sort(); // [1, 1, 3, 4, 5, 9]
