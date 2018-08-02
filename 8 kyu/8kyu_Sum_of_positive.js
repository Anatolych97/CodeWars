function positiveSum(arr) {
    return arr.reduce((acum, e) => (acum += e > 0 ? e : 0), 0);
}