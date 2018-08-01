function fruit(reels, spins) {
    const scoring = {
        "Wild": [100, 10, 0],
        "Start": [90, 9, 18],
        "Bell": [80, 8, 16],
        "Shell": [70, 7, 14],
        "Seven": [60, 6, 12],
        "Cherry": [50, 5, 10],
        "Bar": [40, 4, 8],
        "King": [30, 3, 6],
        "Queen": [20, 2, 4],
        "Jack": [10, 1, 2],
    };
    let comb = {};
    for (let i = 0; i < reels.length; i++) {
        if (comb[reels[i][spins[i]]]) {
            comb[reels[i][spins[i]]]++;
        } else {
            comb[reels[i][spins[i]]] = 1;
        }
    }
    console.log(comb);


    if (Object.keys(comb).length === 3) return 0;
    else if (Object.keys(comb).length === 1) return scoring[Object.keys(comb)[0]][0];
    else {
        let keys = Object.keys(comb);
        if (comb[keys[0]] === 2) {
            if (comb[keys[1]] !== 'Wild') return scoring[keys[0]][1];
            else return scoring[keys[0]][2];
        } else {
            if (comb[keys[0]] !== 'Wild') return scoring[keys[1]][1];
            else return scoring[keys[1]][2];
        }
    }
}