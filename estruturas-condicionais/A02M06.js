// Quando há várias condições exatas, use switch

switch (cor) {
  case "vermelho":
    console.log("Pare!");
    break;
  case "verde":
    console.log("Siga!");
    break;
  default:
    console.log("Sinal desconhecido");
}

// O switch compara uma expressão (cor) com vários valores (case). 
// Quando encontra correspondência, executa o código daquele case até um break. 
// default é o “senão” final. Use switch para comparar uma variável com vários valores possíveis de forma clara

