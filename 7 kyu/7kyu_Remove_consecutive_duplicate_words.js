const removeConsecutiveDuplicates = s => {
    let arr = s.split(' '),
        newStr = [];
    for (let i = 0; i < arr.length; i++)
        if (arr[i - 1] !== arr[i]) newStr.push(arr[i]);

    return newStr.join(' ');
}

//ES6
const removeConsecutiveDuplicates = s => s.split(" ")
    .filter((e, i, arr) => e != arr[i - 1])
    .join(" ");