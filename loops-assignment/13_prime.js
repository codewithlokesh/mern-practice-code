function isPrime(num) {
  if (num <= 1) return false; // negatives, 0, 1 are not prime
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false; // found a divisor
  }
  return true; // no divisors found
}

console.log(isPrime(13)); // true