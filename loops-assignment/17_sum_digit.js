// Find sum of digits of a number.

let num = 12345;
let sum = 0;

while(num > 0){
    let remainder = parseInt(num%10)
    sum += remainder
    num = Math.floor(num/10)
}
console.log(sum)