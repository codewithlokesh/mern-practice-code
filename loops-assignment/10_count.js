// 10. Count how many numbers between 1 and 100 are divisible by 3.

let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    count++;
    console.log(i);
  }
}
console.log(count);
