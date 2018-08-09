var getNum = function (n) {
    let str = n.toString(),
        sum = 0;
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case '0':
            case '6':
            case '9':
                sum++;
                break;
            case '8':
                sum += 2;
                break;
        }
    }
    return sum;
};