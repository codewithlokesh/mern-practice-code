// console.log("hey");
// {
//   let a = 1;
//   let b = 2;
//   console.log(a);
//   console.log(b);
// }
// console.log(a);
// console.log(b);

// console.log("hey");
// {
//   let a = 1;
//   let b = 2;
//   console.log(a);
//   console.log(b);
// }
// console.log(a);
// console.log(b);

// console.log(a);
// var a = () => {
//   console.log("hello");
// };

// console.log(a);
// function a() {
//   console.log("hello");
// }

// var x = 20;
// function printValue() {
//   console.log(x); //ans is undefined bcs access x without declare
//   var x = 10;
// }
// printValue();

// var x = 20;
// function printValue1() {
//   console.log(x);
//   x = 10;
//   console.log(x);
// }
// console.log(x);
// printValue1();

// console.log("start ");
// setTimeout(() => {
//   console.log("setTime function...");
// }, 1500);
// console.log("end");

// console.log(y);
// console.log(typeof y);

// function abc() {
//   a = 10;
//   b = 20;
//   console.log(a); //10
//   console.log(b); //20
// }
// abc();
// console.log(a); //10
// console.log(b); //20

// console.log([1,2,3]===[1,2,3]);
// console.log({ name: "a" } == { name: "a" });

// console.log(name);
// var name = "John";

// setTimeout(() => {
//   console.log("I am setTime out ");
// });
// Promise.resolve().then(() => {
//   console.log("code inside Promise  ");
// });
// console.log("I am end here ");

// let a = 10;
// console.log(typeof typeof typeof a);

// let a = 10;
// console.log(++a);
// console.log(a);
// let a1 = 10;
// console.log(a1++);
// console.log(a1);

// console.log(1 < 2 < 3);
// console.log(3 > 2 > 0);
// console.log(3 > 2 > 1);

// const z = null;
// console.log(typeof z);// object
// const a = undefined; // underfined
// console.log(typeof a);

// function printVal() {
//   var x = 10;
//   console.log(x); //10
// }
// printVal();
// console.log(x);

// function demo() {
//   console.log("hey"); //hey print
// }
// const ans = demo();
// console.log(ans);
// function demo1() {
//   return "hey";
// }
// const ans1 = demo1();
// console.log(ans1);

// console.log(a);
// console.log(b);
// var a = (b = 5);

// const user1 = {
//   userName: "syam",
//   age: 20,
//   address: {
//     city: "katni",
//     state: "mp",
//   },
// };
// const user2 = user1;
// user2.userName = "Dr. K. Anji Reddy";
// user2.address.city = "indore";
// console.log("user1", user1);
// console.log("user2", user2);

// const user11 = {
//   userName: "syam",
//   age: 20,
//   address: {
//     city: "katni",
//     state: "mp",
//   },
// };

// let user12 = { ...user11 };
// user12.userName = "Raghav";
// user12.address.city = "Jab";
// console.log("user11", user11);
// console.log("user12", user12);

// let user12 = { ...user11, ...user11.address };
// user12.userName = "Raghav";
// user12.address.city = "Jabalpur";
// console.log("user12 has newly assign city which in user11", user12);

// let user12 = JSON.parse(JSON.stringify(user11));
// user12.userName = "Raghav";
// user12.address.city = "Jabalpur";
// console.log("no changes bcs we do deep copy", user11);
// console.log("name and city in user12 object has changed", user12);

// const myNumbers = [2, 4, 5, 6, 7];
// const modifyArray = myNumbers.map((num) => {
//   return (num = num / 2);
// });
// const modifyArray1 = myNumbers.map((num) => (num = num / 2));
// console.log("Given Array ", myNumbers);
// console.log("Modified array ", modifyArray);
// console.log("without return ", modifyArray1);

// const Numbers = [0, 2, 4, 5, 6, 7];
// // ans is below
// const filterArray = Numbers.filter((num) => {
//   return num >= 4;
// });

// console.log("Orginal array ", Numbers);
// console.log("Filter array", filterArray);

// function values(a,...args,c){//error
//   console.log(a,args,c);
// }

function values(a, c, ...args) {
  console.log(a, c, args); //ans-: 1 10 [ 2, 4, 5, 6, 8 ]
}
values(1, 10, 2, 4, 5, 6, 8);
