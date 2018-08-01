function sumArray(array) {
    if (array !== null && typeof (array) !== undefined && array.length !== 0 && array.length > 2) {
        array.sort(mySort);
        let sum = 0;
        for (let i = 1; i < array.length - 1; i++) {
            sum += array[i];
        }
        return sum;
    }
    return 0;
}
const mySort = (a, b) => a - b;