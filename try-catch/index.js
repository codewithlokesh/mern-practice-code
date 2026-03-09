function add(x, y) {
  try {
    if (typeof x !== Number && typeof y !== Number) {
      throw " x & y is not number ";
    }
  } catch (err) {
    console.log(err);
    // console.log("something is wrong");
  }
}

console.log(add(8, "lokesh"));
