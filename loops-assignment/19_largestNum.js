let arr = [11,2,3,4,7,18,6,17,5,3]

let max = arr[0]
for(let i =0; i<arr.length; i++){
    if(max < arr[i])
        max = arr[i]
}
console.log(max)