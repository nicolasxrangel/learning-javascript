// Permitem executar código diferente conforme condições. O if...else é o mais comum:

if (x > 0) {
    console.log("x é positivo")
} else if (x < 0) {
    console.log("x é negativo")
} else {
    console.log("x é zero")
}

/*
    Aqui, se x > 0 for true, executa o primeiro bloco. 
    Caso contrário, testa x < 0 e assim por diante. 
    Em palavras: "se a condição for true, executa o bloco A; senão, executa o bloco B". 
    Um if sem else também é válido (executa algo somente quando condição é verdadeira).
*/