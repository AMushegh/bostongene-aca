function mapLetters(text) {
  let group = {};

  for (let i = 0; i < text.length; i++) {
    group[text[i]] ??= [];
    group[text[i]].push(i);
  }

  return group;
}

function foo(a) {}

console.log(mapLetters("froggy"));
