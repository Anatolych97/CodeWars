function isDigit(s) {
    return ((Number.parseFloat(s) && s.search("[-+\/ ]") < 1) || Number.parseFloat(s) === 0);
}
//Or
function isDigit(s) {
    return s == parseFloat(s);
}