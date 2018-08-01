function validParentheses(parens) {
    let counter = 0;
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] === '(') counter++;
        else counter--;
        if (counter < 0) return false;
    }
    return counter === 0;
}