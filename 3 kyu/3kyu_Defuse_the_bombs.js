// Defuse all of the Bombs!
Bomb.diffuse(Bomb.key);
for (let i = 0; i < 5; i++)
    Bomb.diffuse(Bomb.key);

Bomb.diffuse(this.BombKey);

let diffuseTheBomb = () => true;
Bomb.diffuse();

// let b = new Buffer(Bomb.hint.split(' ')[0], 'base64');
Bomb.diffuse(3.14159);
// console.log(new Date().getFullYear() - new Date().setFullYear(4));
Bomb.diffuse();

class Key {
    get key() {
        return 43;
    }
    set key(a) {}
}
class ob {
    constructor() {
        this.num = 100;
    }
    valueOf() {
        this.num = -this.num;
        return this.num;
    }
}
Bomb.diffuse(new Key());
Bomb.diffuse(new ob());
Math.random = () => {
    if (!this.count) this.count = 0;
    this.count++;
    if (this.count == 3) return 0.5;
    return 1;
}
Bomb.diffuse(42);
Array.prototype.valueOf = function () {
    return this.reduce((pre, next) => pre + next)
}
Bomb.diffuse('eWVz');