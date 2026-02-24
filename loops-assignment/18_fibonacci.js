
// 0, 1, 1, 2, 3, 5, 8, 13, …
function fibonacci2(n){
    if(n === 0) return 0;
    if(n === 1) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}
//---------------------------
function Fibonacci(n){
    let series = []
    let a =0, b=1;
    for(let i = 0; i<n; i++){
        series.push(a)
        let temp = a+b;
        a = b;
        b = temp
    }
    return series
}

console.log(Fibonacci(8))