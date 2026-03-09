const arr = [1, [2, [3, [4, [5, [6, [7, 8, 9, 10, 11, "lokesh"]]]]]]];
console.log(arr[1][1][1][1][1][1][5]);

// const flattenArr = arr.flat(2);
const flattenArr = arr.flat(Infinity);
// console.log(flattenArr);

// check something is array or not.
// console.log(Array.isArray("vicky"));
// console.log(Array.isArray([1, 2, 3]));
// console.log(Array.from("lokesh"));
// console.log(Array.from(["Mohit", "lokesh", "vicky"]));

let x = 200;
let y = 300;
let z = 400;

console.log(Array.of(x, y, x));
