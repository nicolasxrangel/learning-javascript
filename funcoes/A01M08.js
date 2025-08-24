// Funções são blocos de código reutilizáveis que podem receber parâmetros, executar uma tarefa e opcionalmente 
// retornar um valor. Define-se uma função assim:

function somar(a, b) {
  return a + b
}
console.log(somar(2, 3))

// A sintaxe básica de declaração é function nome(parametros) { ... }. 
// Ao chamar somar(2,3), a=2 e b=3, e a função devolve 5. Se não usar return, a função retorna undefined por padrão

// Funções também podem ser expressas:

const dizOi = function(nome) {
  return `Oi, ${nome}!`
}
console.log(dizOi("Pedro")) 
