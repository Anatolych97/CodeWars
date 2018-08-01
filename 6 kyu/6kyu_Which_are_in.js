function inArray(array1, array2) {
    return array1.filter((e) => array2.some((z) => z.indexOf(e) !== -1)).sort();
}