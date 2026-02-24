// Check if a number is palindrome.

const isPalindromeNumber = (num) => {
    let reversed = 0;
    let original = num
    while (num > 0) {
        let rem = num % 10
        reversed = reversed * 10 + rem
        num = Math.floor(num / 10)
    }

    if(original === reversed) return true
    return false
}

console.log(isPalindromeNumber(12321))