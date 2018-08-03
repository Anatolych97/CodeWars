// Not my solutionm thanks  msachi (https://www.codewars.com/users/msachi)
var lastDigit = function (str1, str2) {
    let key = [0, 0, 0, 0, 1, 1, 1, 1, 6, 2, 4, 8, 1, 3, 9, 7, 6, 4, 6, 4, 5, 5, 5, 5, 6, 6, 6, 6, 1, 7, 9, 3, 6, 8, 4, 2, 1, 9, 1, 9];
    let i = +str1.slice(-1);
    let j = str2.slice(-2) % 4;
    if (str2 == '0') return 1;
    return key[4 * i + j];
}