const userData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log("fetch response -> ", res);
  const data = await res.json();
  console.log(data);
};
console.log(userData());
