const myPromise = new Promise((resolve, reject) => {
  const error = true;
  if (!error) {
    console.log(resolve("promise resolved"));
  } else {
    console.log(reject("Something is wrong !"));
  }
});

myPromise.then();
