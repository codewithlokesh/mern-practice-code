// 8. Find the sum of odd numbers from 1 to 50.
let sum = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 1) {
    sum += i;
  }
}
console.log(sum);
