// Eventos são “coisas que acontecem” na página – cliques do usuário, 
// pressionar teclas, carregar a página, etc. Ao registrar event listeners, 
// seu código pode reagir a esses eventos. O método mais usado é addEventListener. 
// Exemplo de um botão que responde a clique:

const btn = document.getElementById("botao");
btn.addEventListener("click", () => {
  alert("Botão clicado!")
})

// Nesse código, definimos que quando o usuário clicar ("click") no botão, 
// a função passada será executada, mostrando um alerta. 
// Como explicado na documentação, para reagir a um evento nós 
// "attach an event listener to it. When the event fires, the handler function is called"

// Exemplo: evento de mouseover (passar o mouse)
btn.addEventListener("mouseover", () => {
  btn.style.backgroundColor = "yellow";
});

// Exemplo: evento de mouseout (tirar o mouse)
btn.addEventListener("mouseout", () => {
  btn.style.backgroundColor = ""
})

// Exemplo: evento de duplo clique
btn.addEventListener("dblclick", () => {
  btn.textContent = "Duplo clique!"
})

// Exemplo: evento de teclado em um input
const input = document.getElementById("meuInput")
input.addEventListener("keydown", (event) => {
  console.log("Tecla pressionada:", event.key)
})

// Exemplo: evento ao carregar a página
window.addEventListener("load", () => {
  console.log("Página carregada!")
})

// E acessar detalhes do evento pelo objeto passado ao callback 
// (como event.key, event.target, etc.). Evite usar os manipuladores antigos tipo onclick= no HTML; 
// prefira addEventListener, que permite múltiplos handlers sem sobrescrever.