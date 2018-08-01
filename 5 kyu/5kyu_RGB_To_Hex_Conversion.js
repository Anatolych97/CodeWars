function rgb(r, g, b) {
    let str = '';
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > -1 && arguments[i] < 256) {
            let value = arguments[i].toString(16);
            str += value.length === 1 ? value.repeat(2) : value;
        } else if (arguments[i] > 255) {
            str += (255).toString(16);
        } else if (arguments[i] < 0) {
            str += (0).toString(16).repeat(2);
        }
    }
    return str.toUpperCase();
}