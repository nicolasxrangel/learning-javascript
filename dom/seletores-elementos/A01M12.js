// Para interagir com a página, precisamos selecionar elementos DOM (HTML) usando JavaScript. 
// Alguns métodos principais são:

// document.getElementById("id"): retorna o elemento cujo atributo id bate com a string dada.
let titulo = document.getElementById("titulo")

// document.querySelector("seletorCSS"): retorna o primeiro elemento que bate com o seletor CSS dado.
let primeiroParagrafo = document.querySelector("p")
let botao = document.querySelector(".botao-classe")
let campo = document.querySelector("#campoForm")

// Como citado, querySelector é muito versátil e escolhe o primeiro elemento correspondente

let mainDiv = document.querySelector('.myDiv')
let uniqueElement = document.querySelector('#uniqueId')

// document.querySelectorAll(seletorCSS): retorna todos os elementos que correspondem ao seletor (NodeList estático). Exemplo:

let paragrafos = document.querySelectorAll("p")
paragrafos.forEach(p => console.log(p.innerText))

// Existem métodos mais antigos, como getElementsByClassName ou getElementsByTagName, 
// mas hoje em dia usa-se principalmente querySelector(All) pelas facilidades de CSS.

//Em resumo, seletores conectam JS ao HTML:

let elemento = document.querySelector("#meuId")

