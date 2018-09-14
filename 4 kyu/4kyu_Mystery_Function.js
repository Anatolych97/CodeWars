function mystery(n) {
    return n ^ (n >> 1);
}

function mysteryInv(n) {
    let mask = n >> 1;
    while (mask != 0)
    {
        n = n ^ mask;
        mask = mask >> 1;
    }
    return n;
}

function nameOfMystery() {
    return 'Gray code';
}