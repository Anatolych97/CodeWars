function fakeBin(x) {
    return x.split('').map(e => {
        if (+e < 5) return 0;
        else return 1;
    }).join('');
}