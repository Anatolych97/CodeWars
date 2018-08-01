function findOdd(A) {
  let uniqNumber = {};
  for (let i = 0; i < A.length; i++) {
    if (A[i].toString() in uniqNumber) {
      uniqNumber[A[i].toString()] += 1;
    } else {
      uniqNumber[A[i]] = 1;
    }
  }

  for (let key in uniqNumber) {
    if (uniqNumber[key] % 2 !== 0) {
      return +key;
    }
  }
}

//ES6
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);