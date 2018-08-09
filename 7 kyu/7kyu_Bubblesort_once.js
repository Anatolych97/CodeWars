function bubblesortOnce(intArr) {
    for (let i = 0; i < intArr.length; i++) {
        if (intArr[i] > intArr[i + 1]) {
            intArr[i] = intArr[i] + intArr[i + 1];
            intArr[i + 1] = intArr[i] - intArr[i + 1];
            intArr[i] = intArr[i] - intArr[i + 1];
        }
    }
    return intArr;
}