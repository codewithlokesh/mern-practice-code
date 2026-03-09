function sum(a) {
  return function (b) {
    if (b !== undefined) {
      return sum(a + b);
    }
    return a;
  };
}

function multi(x) {
  return function (y) {
    if (y === undefined) {
      return x;
    }
    return multi(x * y);
  };
}
// console.log(sum(1)(2)(3)(4)(5)());
console.log(multi(1)(2)(3)());
