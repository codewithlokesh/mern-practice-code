let navDiv = document.getElementById("navbar");
console.log(navDiv);

let navItem = ["Home", "Category", "About", "Contact", "SignUp"];

let navItems = navItem.map(
  (item) => ` <span style="font-size: 2rem;">${item}</span>`,
);
navDiv.innerHTML = navItems;

//getting data for api
//getting data for cart data
let cartContainerDiv = document.getElementById("cart-container");
console.log(cartContainerDiv);
async function getUserData() {
  try {
    const url = "https://fakestoreapi.com/products";
    const res = await fetch(url);
    const data = await res.json();
    console.log(typeof data);

    data.map((p) => {
      cartContainerDiv.innerHTML += `
        <div style="border:1px solid #ddd;padding:10px;margin:10px;width:200px;border-radius:8px;display:inline-block;text-align:center;font-family:sans-serif">
        <img src="${p.image}" style="width:80px;height:80px;object-fit:contain"><br>
        <span style="font-weight:bold">${p.title.slice(0, 20)}</span><br>
        <span style="color:green">$${p.price}</span><br>
        <span style="font-size:12px;color:#555">${p.category}</span><br>
        <span style="font-size:12px">⭐ ${p.rating.rate}</span>
        </div>`;
    });
  } catch (err) {
    console.log(err);
  }
}
getUserData();
