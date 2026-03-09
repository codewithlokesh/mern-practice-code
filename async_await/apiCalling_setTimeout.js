const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task completed....");
    resolve();
  }, 3000);
});

promiseOne.then(() => {
  console.log("Promise comsumed...");
});
