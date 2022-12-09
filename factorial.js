const f = 1;
function fact(a) {
  for (var i = 1; i <= a; i++) {
    f = f * i;
  }
  return f;
}

console.log(fact(10));
