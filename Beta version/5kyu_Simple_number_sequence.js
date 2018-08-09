function missing(s) {
    let result = [];
    for (let i = 1; i < s.length; i++) {
        for (let z = 0; z < s.length; z += i) {
            let lf = s.substr(z, i),
                rg = s.substr(z + i, i);
            if (rg < lf) rg = s.substr(z + i, i + 1);
            //                   console.log(lf, rg, rg - lf);
            if (rg - lf === 2 && (+lf !== 0 && +rg !== 0)) {
                result.push(+s.substr(z, i) + 1);
            }
        }
        if (result.length > 0) break;
    }
    //     console.log(result);
    return result.length === 1 ? result[0] : -1;

    function test(number, step) {
        console.log(number, step);
        for (let i = 0; i < number.length; i += step) {
            if (+number.substr(i, step) > +number.substr(i + step, step)) return false;
        }
        return true;
    }
}