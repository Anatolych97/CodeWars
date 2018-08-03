const number = (op, num) => (op) ? op[0](num, op[1]) : num;

const zero  = (op) => Math.floor(number(op, 0));
const one   = (op) => Math.floor(number(op, 1));
const two   = (op) => Math.floor(number(op, 2));
const three = (op) => Math.floor(number(op, 3));
const four  = (op) => Math.floor(number(op, 4));
const five  = (op) => Math.floor(number(op, 5));
const six   = (op) => Math.floor(number(op, 6));
const seven = (op) => Math.floor(number(op, 7));
const eight = (op) => Math.floor(number(op, 8));
const nine  = (op) => Math.floor(number(op, 9));

const plus      = (x) => ([(a, b) => a + b, x]);
const minus     = (x) => ([(a, b) => a - b, x]);
const times     = (x) => ([(a, b) => a * b, x]);
const dividedBy = (x) => ([(a, b) => a / b, x]);