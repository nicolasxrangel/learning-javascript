// Dentro de loops, break; interrompe totalmente o loop, saindo dele,
// e continue; pula para a próxima iteração.
// Use break quando quiser sair antes (por exemplo, em busca) e
// continue para ignorar o resto de uma iteração.

// Exemplo de break:
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    break; // Sai do loop quando i é 2
  }
  console.log(i); // Imprime 0 e 1, depois sai
}

// Exemplo de continue:
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Pula a iteração quando i é 2
  }
  console.log(i); // Imprime 0, 1, 3 e 4
}

