// Task 1
function sumOfAngles(n1, n2) {
  if (n1 + n2 > 180) {
    return "Your input angles are wrong";
  } else {
    return 180 - (n1 + n2);
  }
}
console.log(sumOfAngles(33, 65));

// Task 2
function averageSalary(average, first, second) {
  let third = 3 * +average - +first - +second;
  if (third < 0) {
    return "The Error Message";
  }
  return third;
}
console.log(averageSalary(1200, 400, 450));

// Task 3
function evenOrOdd(n) {
  return n % 2 === 0;
}
console.log(evenOrOdd(22));
