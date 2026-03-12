function sumAll(...num) {
  // args is the name for the array
  let sum = 0;

  for (let numbers of num) {
    sum += numbers;
  }

  return sum;
}

console.log(sumAll(1, 2));
console.log(sumAll(1, 2, 3));
console.log(sumAll(1, 2, 3, 4));
console.log(sumAll(1, 2, 3, 4, 5));
