const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let err = true;
    if (err) {
      resolve({ username: "Bruce Wayne", age: 34, roll: "BATMAN" });
    } else {
      reject("Error !... something is wrong ");
    }
  }, 1000);
});

console.log(promiseFour);
promiseFour
  .then((user) => {
    console.log(user); // it will gonna print entire user object.
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("it will gonna work anyhow, either promise resolve or reject");
  });
