function balance(book) {
    let arrBook = bookToArray(book);

    arrBook[0][0] = numberFormat(arrBook[0][0], 2);
    let balance = parseFloat(arrBook[0][0]),
        avg = 0;

    for (let i = 1; i < arrBook.length; i++) {
        arrBook[i][1] = arrBook[i][1].replace(/\W+/g, '');
        arrBook[i][2] = numberFormat(arrBook[i][2], 2);
        balance -= +arrBook[i][2];
        avg += +arrBook[i][2];
        arrBook[i].push('Balance ' + balance.toFixed(2));
    }

    arrBook.push(
        [`Total expense  ${(+arrBook[0][0] - balance).toFixed(2)}`], [`Average expense  ${(avg / (arrBook.length - 1)).toFixed(2)}`]
    );
    arrBook[0][0] = 'Original Balance: ' + arrBook[0][0];
    console.log(arrBook);

    return bookToString(arrBook);

    function bookToString(array) {
        return array.map(e => e.join(' ')).join('\r\n');
    }

    function bookToArray(book) {
        return book.split('\n')
            .map(e => e.split(' '))
            .filter(e => e.toString() !== '');
    }

    function numberFormat(str, cur = 2) {
        str = str.replace(/[^(\d+\.\d+)]/g, '');
        str = (+str).toFixed(cur);
        return str;
    }
}