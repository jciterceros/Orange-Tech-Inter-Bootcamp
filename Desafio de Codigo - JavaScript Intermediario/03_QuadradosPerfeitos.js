// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let lines = gets().split("\n");
let n = parseInt(lines.shift());

const dp = new Array(n + 1).fill(Infinity);
dp[0] = 0;

//TODO: Com base no valor total, retorne o menor número de quadrados perfeitos.

for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
        dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
}
console.log(dp[n]);
