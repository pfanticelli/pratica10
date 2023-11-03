const prompt = require("prompt-sync")();

// const para evitar serem reatribuidos.
// Leia os três números
const n1 = parseInt(prompt("Digite o primeiro número: "));

const n2 = parseInt(prompt("Digite o segundo número: "));

const n3 = parseInt(prompt("Digite o terceiro número: "));

// Calcule a soma e a média
const soma = n1 + n2 + n3;
const media = soma / 3;

// Formatar o valor da média
const mediaFormatada = media.toFixed(2);

// Mostre na tela o valor da soma e média
console.log("A soma é: ", soma);
console.log("A média é: ", mediaFormatada);