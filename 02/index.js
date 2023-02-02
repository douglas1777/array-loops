const letras = ["A", "a", "B", "C", "E", "e"];
let qtd = 0;
let tem = false;
const unidade = (qtd === 1 ? "letra" : "letras")
for (let letra of letras) {
    if (letra === "E" || letra === "e") {
        qtd++;
        tem = true;

    }
}
console.log(`Foram encontradas ${qtd} ${unidade} E ou e`)
if (!qtd)
    console.log("Não foram encontradas as letras E ou e")