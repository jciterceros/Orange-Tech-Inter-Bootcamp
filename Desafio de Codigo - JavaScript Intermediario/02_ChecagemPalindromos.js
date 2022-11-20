// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let resultado = gets();
//print(checaPalindromo(entrada));

//TODO:Retorne TRUE ou FALSE, caso a "palavra" seja ou não um Palíndromo.

function checaPalindromo(string){
    var str1 = string
    var str2 = string
    str1=str1.replace(/\s/g, '').toLowerCase();
    str2= str2.replace(/\s/g, '').split('').reverse().join('').toLowerCase();
    if(str1 === str2){
        return "TRUE";
    }
    else{
      return "FALSE";
    }
}


print(checaPalindromo(resultado));