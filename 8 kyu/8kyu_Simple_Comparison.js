function add(a, b) {
    if (typeof a === 'number') return a === +b;
    else if (typeof b === 'number') return +a === b;
    else return a === b;
}