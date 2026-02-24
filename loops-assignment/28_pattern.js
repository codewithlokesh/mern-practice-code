function leftTriangle(num){
    let pattern = ""
    for(let i = 1; i<=num; i++){
        for(let j = 1; j<=i; j++){
            pattern += j
        }
        pattern += "\n"
    }
    console.log(pattern)
}

leftTriangle(5)