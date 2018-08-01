function accum(s) {
    let target = "";
    for (let i = 0; i < s.length; i++) {
        target += s[i].toUpperCase();
        for (let j = 0; j < i; j++) {
            target += s[i].toLowerCase();
        }
        if (i + 1 !== s.length) target += "-";
    }
    console.log(target);
    return target;
}
//ES6
function accum(s) {
    return s.split('').map((e, i) => {
        return e.toUpperCase() + e.toLowerCase().repeat(i)
    }).join('-');
}