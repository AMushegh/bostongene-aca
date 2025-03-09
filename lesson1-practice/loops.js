let number = 56457;
let digitCount = 0;

while (number) {
  digitCount++;
  number = Math.floor(number / 10);
}

console.log({ digitCount });

let n = 45;
for (let i = 0; i < n; ++i) {
  console.log("first");
}

console.log({ i });

let test = 0;
// test = test + 1;
// test += 1
// test++
// ++test

// test = test - 1
// test -= 1
// test--
// --test
