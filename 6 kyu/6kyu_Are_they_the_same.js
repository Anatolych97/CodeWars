function comp(array1, array2) {
    if (array1 === null || array2 === null) return false;
    if (array1.length === 0 || array2.length === 0) {
        return true;
    } else {
        array1.sort((a, b) => a - b);
        array2.sort((a, b) => a - b);
        return array1.every((e, i) => Math.pow(e, 2) === array2[i]);
    }
}