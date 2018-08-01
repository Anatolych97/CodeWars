function rot13(message) {
    let code = "",
        pattern = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < message.length; i++) {
        if (~pattern.indexOf(message[i].toLowerCase())) {
            let index = pattern.indexOf(message[i].toLowerCase());
            console.log(index);
            index = index + 13 > pattern.length - 1 ? (index + 13 - pattern.length) : index + 13;
            code += message[i].toUpperCase() === message[i] ? pattern[index].toUpperCase() : pattern[index];
        } else {
            code += message[i];
        }
    }
    return code;
}