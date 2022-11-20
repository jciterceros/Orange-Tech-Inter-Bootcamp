/* 
Desafio
O fatorial de um número inteiro positivo N é o produto de todos os inteiros positivos menores ou iguais a n. 
Fazemos um fatorial desajeitado usando os inteiros em ordem decrescente, trocando as operações de multiplicação 
por uma rotação fixa de operações cuja ordem é: multiplicar '*', dividir '/', adicionar '+' e subtrair '-'. 
Por exemplo, desajeitado(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1. Lembre-se que no fatorial desajeitado as 
operações ainda são aplicadas usando a ordem usual de operações aritméticas. Além disso, a divisão neste caso sempre 
resulta em um número inteiro, por exemplo, 90 / 8 = 11. Dado um inteiro N, retorne o fatorial desajeitado de n.

Entrada: 4 Saída: 7
Explicação: 7 = 4 * 3 / 2 + 1

Entrada: 10 Saída: 12
Explicação: 12 = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1

*/
// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

//let lines = gets().split("\n");
let n = 10; //parseInt(lines.shift());

if (n <= 2) {
    print(n);
}

// TODO: Calcule o valor do fatorial de "n", atribuindo o retorno a "r".
let res = 0;
let cnt = 1;
let tmp = n;
n--;

while (n >= 0) {
    tmp *= n;
    n--;
    if (n != 0) {
        tmp = parseInt(tmp / n);
        n--;
    }
    tmp += n;
    n--;
    res += tmp;
    tmp = -n;
    if (n == 1) {
        res += tmp;
    }
    n--;
}
console.log(res);
