// Uma função pode ter de zero a muitos parâmetros (até 255, segundo especificação). 
// Exemplo mais completo:

function criarUsuario(nome, idade) {
  return { nome: nome, idade: idade }
}
let u = criarUsuario("Pedro", 21)
console.log(u.idade)

/*
    Note que funções em declarações são hoisted: (O hoisting é um conceito em JavaScript onde declarações de variáveis e funções são movidas 
        "para cima" do seu escopo, ou seja, são processadas antes da execução 
        do código.)podem ser chamadas antes da definição no código.

    No entanto, expressões de função (atribuídas a variáveis) não são. 
    Funções permitem estruturar o código em tarefas nomeadas. 
    Elas capturam comportamento específico (como somar, logarDados, etc.), melhorando organização e evitando duplicação.
*/