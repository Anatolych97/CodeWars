function escape(carpark) {
    let result = [],
        pos = findStart();

    for (let i = 0; i < carpark[pos[0]].length;) {
        if (pos[0] === carpark.length - 1 && pos[1] === carpark[carpark.length - 1].length - 1) {
            break;
        }
        if (pos[0] === carpark.length - 1 && pos[1] !== carpark[carpark.length - 1].length) {
            result.push("R" + (carpark[carpark.length - 1].length - pos[1] - 1));
            break;
        }
        if (carpark[pos[0]][i] === 1) {
            if (i > pos[1]) result.push("R" + (i - pos[1]));
            else result.push("L" + (pos[1] - i));

            let deep = 1;
            if (carpark[pos[0] + 1][i] === 1) {
                for (let j = pos[0] + 1; j < carpark.length; j++)
                    if (carpark[j][i] === 1) deep++;
                    else break;
            }

            result.push("D" + deep);

            pos[0] += deep;
            pos[1] = i;
            i = 0;
            continue;
        }
        i++;
    }

    return result;

    function findStart() {
        for (let i = 0; i < carpark.length; i++) {
            for (let z = 0; z < carpark[i].length; z++) {
                if (carpark[i][z] === 2) return [i, z];
            }
        }
    }
}