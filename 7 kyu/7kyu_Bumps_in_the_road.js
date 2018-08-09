function bump(x) {
    return x.match(/n{1}/g) !== null && x.match(/n{1}/g).length > 15 ? 'Car Dead' : 'Woohoo!';
}