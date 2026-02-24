function countVowels(str){
  let count = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for(let i = 0; i<str.length; i++){
    for(let j = 0; j<vowels.length; j++){
      if(str[i] === vowels[j])
        count++
    }
  }

  return count
}

console.log(countVowels("aaiiee"))