const original = [1, 4, 12, 21, 53, 88, 112, 115, 256, 257, 1024, 778];
const par = [];
for (let i of original) {
    if (i % 2 == 0) {
        par.push(i)
    }
}
console.log(par);