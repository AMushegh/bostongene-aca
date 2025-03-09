// n - even --> 123
// n - odd --> 567
function getEvenCode(number) {
  if (number % 2 === 0) {
    return 123;
  }
  return 567;
}

console.log(getEvenCode(34567));
