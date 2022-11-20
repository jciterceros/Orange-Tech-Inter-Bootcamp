// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

var isValid = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "[" && s[i + 1] === "]") {
            return true;
        } else if (s[i] === "(" && s[i + 1] === ")") {
            return true;
        } else if (s[i] === "{" && s[i + 1] === "}") {
            return true;
        } else {
            return false;
        }
    }
};

console.log(isValid("[]"));
