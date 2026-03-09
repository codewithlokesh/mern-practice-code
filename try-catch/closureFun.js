function outerFun() {
  let x = 10;
  function innerFun() {
    console.log(x);
  }
  return innerFun();
}

console.log(outerFun());
