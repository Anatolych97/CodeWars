function incrementString(strng) {
    if (strng.match(/\d+$/)) {
        let numStr = strng.match(/\d+$/);
        return strng.slice(0, strng.indexOf(numStr)) + numInc(numStr[0].split(""));
    } else return strng + 1;
}

function numInc(str) {
    let zeroCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '0') break;
        zeroCount++;
    } //end for
    let num = Number.parseInt(str.join("").match(/\d+$/));
    if (num === 0) return '0'.repeat(zeroCount - 1) + 1;
    return zeroCount === 0 ? num + 1 :
        (num + 1).toString().length > num.toString().length ?
        "0".repeat(zeroCount - 1) + (num + 1) :
        "0".repeat(zeroCount) + (num + 1);
}