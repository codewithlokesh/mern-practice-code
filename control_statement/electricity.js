let units = 101;

let bill = 0;

if (units <= 100) {
  bill = 0;
  console.log(bill);
} else if (units <= 200) {
  bill = (units - 100) * 10;
  console.log(bill);
} else if (units <= 250) {
  bill = 100 * 10 + (units - 200) * 20;
  console.log(bill);
} else {
  console.log("y");
  bill = 100 * 10 + 50 * 20 + (units - 250) * 20;
  console.log(bill);
}
