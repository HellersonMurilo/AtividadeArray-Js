//1 - Criar uma função que receba como parâmetro um array de números e retorne um array contendo somente números positivos.

var numeros = [1, -2, 4, 5, 6, 7, 2, 432, 634, -412, -632, 51, 999];

function numPositivos(arrayDeNumeros) {
    return arrayDeNumeros.filter((numero) => numero > 0);
}

const numerosPositivos = numPositivos(numeros);
console.log(numerosPositivos);


//2 - Localizar o maior valor dentro de um array de números.
function localizaMaior() {
    let maior = Math.max(...numeros);
    console.log(maior)
}
localizaMaior()

//3 - Calcular a soma de todos os dígitos de um número inteiro positivo. Exemplo: 12323  => retorna  11
const numeroInteiro = 192834

function somaDigitos() {
    const numeroString = numeroInteiro.toString() //para percorrer cada elemento da lista
    let soma = 0
    for (const digitos of numeroString) {
        const digitoNumero = parseInt(digitos)
        soma += digitoNumero
    }
    console.log("A soma dos digitos é igual a " + soma)
}

somaDigitos()

// 4 - Dado uma array com vários nomes, retornar a maior string deste array.

const nomes = ["Murilo", "Giovanna", "Samuel", "Hellerson", "Calabianqui"];

function maiorArray() {
    let tamanhoMaiorNome = 0;

    for (const nome of nomes) {
        let nomeString = nome.length //convertendo o nome que esta rodando em String
        if (nomeString > tamanhoMaiorNome) {
            tamanhoMaiorNome = nomeString;
        }
    }
    console.log(`O maior nome contem ${tamanhoMaiorNome} caracteres`)
}

maiorArray()