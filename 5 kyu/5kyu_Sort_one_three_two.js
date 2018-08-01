//Sort number like their word view
function sortByName(ary) {
    ary.sort(sorter);
    return ary;

    function sorter(a, b) {
        let strA = createNumberWord(a.toString()),
            strB = createNumberWord(b.toString());
        console.log(strA + " > " + strB, strA > strB);
        return strA > strB;
    }

    function createNumberWord(strN) {
        let answer = '';
        switch (strN.length) {
            case 3:
                answer += translator.getHundreds(strN[0]);
                answer += translator.getDecades(strN.slice(-2));
                break;
            case 2:
                answer += translator.getDecades(strN.slice(-2));
                break;
            case 1:
                answer += translator.getDigits(strN.slice(-1));
                break;
        }
        return answer.trim();
    }
}
const translator = {
    "digits": [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine'
    ],
    "decades": [
        'zero',
        'ten',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ],
    "getDigits": function (number) {
        return this.digits[+number];
    },
    "getSpecDecs": function (numStr) {
        switch (numStr) {
            case '11':
                return 'eleven';
            case '12':
                return 'twelve';
            case '13':
                return 'thirteen';
            case '15':
                return 'fifteen';
            case '18':
                return 'eighteen';
            default:
                return this.getDigits(numStr[1]) + "teen";
        };
    },
    "getDecades": function (numStr) {
        let answer = '';
        if (+numStr > 10 && +numStr < 20) return this.getSpecDecs(numStr);
        else {
            answer += numStr[0] !== '0' ? this.decades[+numStr[0]] : '';
            answer += numStr[0] !== '0' && numStr[1] !== '0' ? '-' : '';
            answer += numStr[1] !== '0' ? this.getDigits(numStr[1]) : '';
        }
        return answer;
    },
    "getHundreds": function (numStr) {
        if (+numStr !== 0)
            return this.getDigits(numStr[0]) + " hundred ";
        else return "";
    },
}