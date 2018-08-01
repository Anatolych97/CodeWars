let range = function (start, step, stop) {
    let arr = [];
    if (arguments.length === 1)
        for (let i = 1; i <= start; i++) {
            arr.push(i);
        }
    else if (arguments.length === 2)
        for (let i = start; i <= step; i++) arr.push(i);
    else if (arguments.length === 3)
        for (; start <= stop; start += step) arr.push(start);
    return arr;
};