function sortMyString(S) {
    let odd = "",
        even = "";
    S.split('').map((e, i) => {
        if (i % 2 === 0) even += e;
        else odd += e;
    });
    return even + " " + odd;
}