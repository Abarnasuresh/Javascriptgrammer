function primeNumber(n) {
    let arr = [2];
    for (let i = 3; i <= n; i += 2)
        if (!((i % 3 == 0 && i > 3) || (i % 5 == 0 && i > 5) || (i % 7 == 0 && i > 7) || (i % 9 == 0 && i > 9))) {
            arr.push(i);
        }
    return arr;
}
console.log(primeNumber(200));