// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75];

let valor = parseInt(gets());

//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.
let indice = 0;
let encontrado = false;
for (let i = 0; i < elementos.length; i++) {
    if (elementos[i] === valor) {
        indice = i;
        console.log("Achei " + valor + " na posicao " + indice);
        encontrado = true;
        break;
    }
}
if (!encontrado) {
    console.log("Numero " + valor + " nao encontrado!");
}
