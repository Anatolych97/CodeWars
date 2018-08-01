function landPerimeter(arr) {
    let perimiter = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let z = 0; z < arr[i].length; z++) {
            if (arr[i][z] === 'X') {
                perimiter += 4;
                if (arr[i][z + 1] === 'X') perimiter--;
                if (arr[i][z - 1] === 'X') perimiter--;
                if (typeof arr[i - 1] !== 'undefined')
                    if (arr[i - 1][z] === 'X') perimiter--;
                if (typeof arr[i + 1] !== 'undefined')
                    if (arr[i + 1][z] === 'X') perimiter--;
            }
        }
    }
    return "Total land perimeter: " + perimiter;
}