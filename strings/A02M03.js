/*
    O objeto global String fornece métodos úteis (embora você use strings como primitivos, esses métodos tratam-nas como objeto):
    .concat(), + ou += para juntar strings.
    .toUpperCase(), .toLowerCase() para mudar caixa.
    .indexOf(sub) ou .includes(sub) para procurar substrings.
    .slice(start, end), .substring(start, end) para extrair parte da string.
    .replace(old, new), .split(sep) etc.
*/

let saudacao = "Olá, mundo!";
let nome = 'Nicolas';

let mensagem = `Bem-vindo, ${nome}!`;
let comprimento = saudacao.length; // 13
let primeiroCaractere = saudacao[0]; // "O"
let saudacaoCompleta = saudacao.concat(" ", nome); // "Olá, mundo! Nicolas"
let saudacaoMaiuscula = saudacao.toUpperCase(); // "OLÁ, MUNDO!"
let saudacaoMinuscula = saudacao.toLowerCase(); // "olá, mundo!"
let saudacaoIndex = saudacao.indexOf("mundo"); // 5
let saudacaoInclui = saudacao.includes("mundo"); // true
let saudacaoSlice = saudacao.slice(0, 5); // "Olá, "
let saudacaoSubstring = saudacao.substring(0, 5); // "Olá, "
let saudacaoReplace = saudacao.replace("mundo", "JavaScript"); // "Olá, JavaScript!"
let saudacaoSplit = saudacao.split(", "); // ["Olá", "mundo!"]

