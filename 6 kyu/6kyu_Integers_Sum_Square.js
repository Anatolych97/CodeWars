const intSumSq = (n, m) => {
    let arr = [],
        temp = '',
        price = 0;

    for (let i = 0; i < n; i++) {
        temp = i.toString().split('');
        if (temp.length > 1) {
            price = Math.pow(temp.reduce( (acum, el) => acum += +el, 0), 2);
        } else {
            price = i * i;
        }
        if (m === price) arr.push(i);
    }
    return arr.length !== 0 ? arr : 'No result';
}