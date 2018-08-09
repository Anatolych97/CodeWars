function findUnique(numbers) {
    let uObj = {};
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] in uObj) {
            uObj[numbers[i]]++;
        } else {
            uObj[numbers[i]] = 0;
        }
    }
    for (let uniq in uObj) {
        if (uObj[uniq] === 0) return +uniq;
    }
}

