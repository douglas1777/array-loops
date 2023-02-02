const original = [5, 7, 13, 11, 12, 17, 26, 34, 118, 245, 512, 1024, 2048, 4096];
const intervalo = []
for (let i of original) {
    if (i > 9 && i < 21) {
        intervalo.push(i)
    }
    if (i > 100) {
        intervalo.push(i)
    }
}
console.log(intervalo)