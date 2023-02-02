const nomes = ["Ana", "Joana", "Carlos", "amanda", "Abestado", "antonio"];
const filter = ["A", "a"];
const result = [];
for (let i of nomes) {
    if (i[0] === "A" || i[0] === "a") {
        result.push(i)
    }
}
console.log(result)
