const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("setTimeout task running.....");
  }, 2000);
  resolve({ username: "Bruce Wayne", age: 34, roll: "Batman" });
});

promiseThree.then((data) => {
  console.log(data);
});
