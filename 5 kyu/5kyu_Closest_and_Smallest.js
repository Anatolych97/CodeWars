function closest(strng) {
    if (strng === '') return [];
    let numW = strng.split(' ').map(function (el, index) {
        let nums = el.split(''),
            wg = 0;
        for (let i = 0; i < nums.length; i++) {
            wg += +nums[i];
        }
        return {
            index: index,
            wg: wg,
            value: +el
        };
    }).sort((a, b) => a.wg - b.wg);

    let min = {
        bW: {},
        sW: {},
        dif: 999999
    };
    for (let i = 0; i < numW.length - 1; i++) {
        if (min.dif > numW[i + 1].wg - numW[i].wg) {
            min.dif = numW[i + 1].wg - numW[i].wg;
            min.bW = numW[i + 1];
            min.sW = numW[i];
        }
    }
    let fArr = numW.filter(e => e.wg === min.sW.wg).sort((a, b) => a.index - b.index);
    if (fArr.length < 2) {
        return [
            [min.sW.wg, min.sW.index, min.sW.value],
            [min.bW.wg, min.bW.index, min.bW.value]
        ];
    }
    return [
        [fArr[0].wg, fArr[0].index, fArr[0].value],
        [fArr[1].wg, fArr[1].index, fArr[1].value]
    ];
}