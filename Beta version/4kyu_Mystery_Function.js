function mystery(n) {
    let T = createT(n);
    console.log(T);
    return parseInt(T[n], 2);
}

function mysteryInv(n) {}

function nameOfMystery() {
    return 'Gray';
}

function Gray(k) {
    if (k === p + 1) {
        return;
    } else {
        g[k] = 0;
        Gray(k + 1);
        g[k] = 1;
        RGray(k + 1);
    }
}

function RGray(k) {
    if (k === p + 1) {
        return;
    } else {
        g[k] = 1;
        Gray(k + 1);
        g[k] = 0;
        RGray(k + 1);
    }
}

function createT(n) {
    let mas = [];
    let a;
    for (let i = 0; i <= 1; i++) {
        for (let z = 0; z <= 1; z++) {
            for (let x = 0; x <= 1; x++) {
                for (let c = 0; c <= 1; c++) {
                    a = '0b' + i + z + x;
                    a = a ^ (a >>> 1);
                    mas.push(a.toString(2));
                }
            }
        }
    }
    return mas;
}