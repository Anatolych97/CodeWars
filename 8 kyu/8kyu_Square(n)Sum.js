function squareSum(numbers) {
  if (typeof (numbers) === 'object') {
    return numbers.reduce((acum, elem) => {
      return acum += elem * elem;
    }, 0)
  }
}