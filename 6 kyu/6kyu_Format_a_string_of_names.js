function list(names) {
    let nameList = "";
    if (names.length === 0) return '';
    else if (names.length < 2) return names[0].name;
    else if (names.length === 2) return names[0].name + ' & ' + names[1].name;
    else {
        for (let i = 0; i < names.length - 2; i++) {
            for (let key in names[i]) {
                nameList += names[i][key] + ', ';
            }
        }
        nameList += names[names.length - 2].name + ' & ' + names[names.length - 1].name;
    }
    return nameList;
}