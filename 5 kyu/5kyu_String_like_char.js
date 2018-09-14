//Add the methods to String.prototype
String.prototype.map = function (func) {
    return this.split('').map(func).join('');
}
String.prototype.join = function (separator) {
    return this.split('').join(separator);
}
String.prototype.filter = function (func) {
    return this.split('').filter(func).join('');
}
String.prototype.forEach = function (func) {
    return this.split('').forEach(func);
}
String.prototype.some = function (func) {
    return this.split('').some(func);
}
String.prototype.every = function (func) {
    return this.split('').every(func);
}
String.prototype.reduce = function (func, acum) {
    if (acum !== undefined) {
        return this.split('').reduce(func, acum);
    } else {
        return this.split('').reduce(func);
    }
}
String.prototype.reduceRight = function (func, acum) {
    if (acum !== undefined) {
        return this.split('').reverse().reduce(func, acum);
    } else {
        return this.split('').reverse().reduce(func);
    }
}
String.prototype.sort = function (func) {
    return this.split('').sort(func).join('');
}
String.prototype.reverse = function () {
    return this.split('').reverse().join('');
}

String.prototype.push = function (element) {
    return this + element;
}
String.prototype.pop = function () {
    return this.slice(0, -1);
}
String.prototype.shift = function () {
    return this.slice(1);
}
String.prototype.unshift = function (element) {
    return element + this;
}
String.prototype.splice = function (start, deleted, element) {
    return this.slice(0, start) + this.slice(start + deleted + 1) + element;
}