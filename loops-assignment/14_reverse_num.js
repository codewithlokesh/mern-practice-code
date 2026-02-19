//  Reverse a given number.

let num = 1234;
let rev =0;

while (num > 0) {
    let remainer = num % 10;;
    rev = rev * 10 + remainer
    num = Math.floor(num / 10)
}

console.log(rev)