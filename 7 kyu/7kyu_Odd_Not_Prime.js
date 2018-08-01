function oddNotPrime(n) {
    let count = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 3; j < n; j++) {
            if ((i % j === 0) && (i !== j) && (i % 2 !== 0)) {
                count++;
                break;
            }
        }
    }
    return count;
}