//selected by id

const nav = document.getElementById("nav");
nav.style.color = "red";
nav.style.border = "1px solid blue";
nav.innerHTML = `This is Header heading`;
// console.log(nav);

//selected by classes
const box1 = document.getElementsByClassName("box-1");
box1[0].style.backgroundColor = "red";
box1[1].style.backgroundColor = "blue";
box1[1].innerHTML = `<b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, amet?</b>`;
// console.log(box1);

//selected by tagName
const para = document.getElementsByTagName("p");
para[0].textContent = "This is changed paragraph";

const btn = document.getElementById("btn");
console.log(btn);

let gettingData = document.getElementById("gettingData");

async function getUserData() {
  try {
    const url = "https://fakestoreapi.com/products/1";
    const res = await fetch(url);
    const data = await res.json();
    gettingData.innerHTML = JSON.stringify(data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
// console.log(getUserData());

btn.addEventListener("click", getUserData);
