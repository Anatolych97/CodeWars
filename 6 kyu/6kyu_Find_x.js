function findX(n) {
    let x = 0, kf = (n*2-1);
    for (let i = 0; i < n; i++) {
       x += n * kf;
       kf += 2;
    }
    return x;
  }

  //More beatiful solution
  const findX = n => n * n * (3 * n - 2);