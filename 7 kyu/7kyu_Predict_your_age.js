function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        arr[i] = arguments[i];
        arr[i] *= arr[i];
    }
    return Math.floor(Math.sqrt(arr.reduce((acum, e) => acum += e)) / 2);
}