//Play with the function mystery(x) in your test cases.
//When you think you've solved the mystery,
//implement the following function as your answer
const solved = function(str) {
    console.log(str);
    let ans = '',
        mas = str.trim().split(' ');
    if (mas.length === 1) {
        if(str.length % 2 !== 0) {
          ans += oneWord(str);
        } else {
          ans += wordTransf([str]);
        }
    } else if (mas.length === 2) {
        ans += wordTransf(mas);
    } else {
        ans += ' '.repeat(mas.length - 1);
        ans += wordTransf(mas);
    }
    return ans;

    function oneWord(str, cor) {
        let wordArr = str.split('');
        delete wordArr[Math.ceil(wordArr.length / 2)];
        return wordArr.sort((a, b) => a.localeCompare(b)).join('');
    }

    function wordTransf(wordsArr) {
        let res = '',
            lwCase = [],
            upCase = [];

        for (let i = 0; i < wordsArr.length; i++) {
            let mas = wordsArr[i].split('');
            for (let i = 0; i < mas.length; i++) {
                if (mas[i].toUpperCase() === mas[i]) upCase.push(mas[i]);
                else lwCase.push(mas[i]);
            }
        }

        upCase.sort((a, b) => a.localeCompare(b));
        lwCase.sort((a, b) => a.localeCompare(b));

        res += upCase.join('') + lwCase.join('');

        return res;
    }
}
