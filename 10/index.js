const numeros = [3, 24, 8, 11, 7, 15];
let maior = numeros[0];
let menor = numeros[0];
for (let i of numeros) {
    if (i > maior) {
        maior = i;
    } if (i < menor) {
        menor = i;
    }
}

console.log(maior - menor)
