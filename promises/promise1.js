const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("promise consumed");
  } else {
    reject("promise reject");
  }
});

myPromise
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
  });
