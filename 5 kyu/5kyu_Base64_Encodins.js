//Extend the String object with toBase64() and fromBase64() functions
String.prototype.toBase64 = function () {
    const charToHex = (str) => str.split('').map((a, i, arr) => str.charCodeAt(i).toString(16)),
        hexToInt = (arr) => arr.map(a => parseInt(a, 16)),
        intToBin = (arr) => arr.map(a => a.toString(2).length < 8 ? '0'.repeat(8 - a.toString(2).length) + a.toString(2) : a.toString(2));

    let hexCode = charToHex(this),
        intCode = hexToInt(hexCode),
        binCode = intToBin(intCode),
        sixtets = createMatrix(binCode),
        str64 = encode(sixtets);

    return str64;

    function createMatrix(bits) {
        let bitString = bits.join(''),
            matrix = [],
            temp = "";
        for (let i = 0; i < bitString.length; i += 6) {
            temp = bitString.slice(i, i + 6);
            temp = temp.length !== 6 ? temp + '0'.repeat(6 - temp.length) : temp;
            matrix.push(temp);
        }
        if (matrix.length % 4 !== 0) {
            matrix.push('');
        }
        return matrix;
    }

    function encode(bitsArray) {
        let shifer = '',
            base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        for (let i = 0; i < bitsArray.length; i++) {
            shifer += bitsArray[i] !== '' ? base[parseInt(bitsArray[i], 2)] : '=';
        }
        return shifer;
    }
}
String.prototype.fromBase64 = function () {
    let base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

    return restoreMessage(getBitsString(getIntCodes(getChars(this))));

    function getChars(str) {
        let charArray = [];
        for (let i = 0; i < str.length; i += 4) {
            charArray.push(str.slice(i, i + 4));
        }
        return charArray;
    }

    function getIntCodes(charArray) {
        let intArray = [];
        for (let i = 0; i < charArray.length; i++) {
            charArray[i].split('').forEach(
                a => intArray.push(base.indexOf(a))
            );
        }
        return intArray;
    }

    function getBitsString(intArray) {
        return intArray.map(a => {
            let temp = a.toString(2);
            return temp.length !== 6 ? '0'.repeat(6 - temp.length) + temp : temp;
        }).join('');
    }

    function restoreMessage(bitStr) {
        let bytes = [];
        for (let i = 0; i < bitStr.length; i += 8) {
            bytes.push(bitStr.slice(i, i + 8));
        }
        return bytes.reduce((accum, el) => accum += String.fromCharCode(parseInt(el, 2)), '');
    }
}