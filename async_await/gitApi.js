const userData = async () => {
  const response = await fetch("https://api.github.com/users/codewithlokesh");
  //   console.log("lokesh =>", response);
  const data = await response.json();
  console.log(data);
};

userData().then((data) => {
  console.log(data);
});
