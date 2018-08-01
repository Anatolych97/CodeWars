var moveZeros = function (arr) {
    var notZero = arr.filter(e => e !== 0);
    var zero = arr.filter(e => e === 0);
    return notZero.concat(zero);
}

//v.1
var moveZeros = function (arr) {
    let myArr = [],
        counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            myArr.push(arr[i]);
        } else counter++;
    }
    for (let i = 0; i < counter; i++) {
        myArr.push(0);
    }
    return myArr;
}