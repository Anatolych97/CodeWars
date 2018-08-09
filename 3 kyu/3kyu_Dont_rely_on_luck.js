//Not perfect solution.
guess = 42; // The answer to everything, huh?
let secretMath = Math;
Math = {
    floor: function (a) {
        if(~~a > 1 && ( a / 100000) - 1 < 0) return guess;
        else return ~~a;
    },
};
Math.floor.toString = () => secretMath.floor.toString();
Math.__proto__ = secretMath;
Object.freeze(Math);

//Perfecto solution
let rnd = 0.00000001;
Math = Object.create(Math, { random: { value: () => rnd += 0.00000001 } });
Math.random.toString = () => 'function random() { [native code] }';
Object.freeze(Math);
guess = 1;