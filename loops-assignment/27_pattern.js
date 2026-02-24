function pattern26(num){
    let pattern = ""
    for(let i = 0; i<=3; i++){
        for(let j = 0; j<3; j++){
            pattern += "_ "
        }
        pattern += "\n"
    }
    console.log(pattern)
}

pattern26(5)