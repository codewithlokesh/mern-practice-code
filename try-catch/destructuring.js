let arr = [1, 2, "lokesh", "ajju", "vicky"];
let [a, b, ...name] = arr;
// console.log(a, b, name);

const obj = {
  id: 101,
  user: "Bruce wayne",
  roll: "developer",
};

const { user, roll } = obj;
console.log(user, roll);
