let user = {
  id: "cs101",
  Name: "lokesh",
};
Object.freeze(user); //can't update
Object.seal(user);
user.city = "indore";
console.log(user);

let newObj = {
  for: "for keyword",
  let: "let keyword",
  var: "var keyword",
  return: "return keyword",
};
console.log(newObj.return);
console.log(newObj.for);
