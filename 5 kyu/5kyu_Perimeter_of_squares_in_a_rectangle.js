function perimeter(n) {
    let a = 1,
        b = 1,
        c = a + b;
    for (let i = 0; i < n; i++) {
        a = b;
        b = c;
        c = a + b;
    }
    return 4 * c - 4;
}