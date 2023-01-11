console.log("***** SELECTORS *****");

//*===========================================
//*            GETELEMENTBYID()
//*===========================================
const myHeader = document.getElementById("header");
console.log(myHeader);
myHeader.style.color = "blue";
myHeader.style.backgroundColor = "green";

const button = document.getElementById("btn");
const textInput = document.getElementById("input");
button.style.backgroundColor = "orange";
button.style.color = "black";
button.style.padding = "0.7rem";
button.style.border = "none";
button.style.borderRadius = "10px";
textInput.style.padding = "0.7rem";
//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================
const list = document.getElementsByTagName("li");

console.log(list);
list[0].style.color = "magenta";
list[list.length - 1].style.color = "purple";

const header = document.getElementsByTagName("header");
console.log(header);
console.log(list.item(3));

list[3].textContent = "REACT/VUE";
list[3].innerText = "REACT/VUE/Swetle";
list[3].innerHTML = "REACT/VUE/Swetle/Angular";
console.log(list[2].textContent);

console.log(list[2].innerText);
console.log(list[2].innerHTML);

list[4].innerHTML += `<li><a class="link" href ="https://www.linkedin.com/in/pelek">CW</a></li>`;

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================
const itemList = document.getElementsByClassName("list");

console.log(itemList);

console.log(...itemList);

[...itemList].forEach((x) => console.log(x));
[...itemList].map((x) => console.log((x.style.color = "red")));

const itemListArr = Array.from(itemList);
console.log(itemList);
//* ========================================
//*              QUERYSELECTOR()
//* ========================================

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================
