function solveMine(map, n) {
    let array = mapSpliter(map);

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === '0') {
                closestOpener(array, [i, j]);
            }
        }
    }
    return array.join(' ');
}

function closestOpener(map, pos) {
    let posCell = pos[1],
        posRow = pos[0];
    for (let cell = posCell > 0 ? posCell - 1 : posCell, row = posRow > 0 ? posRow - 1 : posRow; row < posRow + 2 && row < map.length; cell++) {

        if (cell === pos[1] + 1 && row === pos[0] + 1) break;
        if (cell === pos[1] + 1) {
            row++;
            cell -= 2;
        }
        map[row, cell] = open[row, cell];
    }
    return map;
}

function mapSpliter(map) {
    let mapSplit = map.split('\n');
    let target = [];
    for (let i = 0; i < mapSplit.length; i++) {
        target.push(mapSplit[i].split(''));
    }
    return target;
}