console.log("**** CREATE NODE ****");
const newPar = document.createElement("p");
const text = document.createTextNode("Bur bir p elementidir.");
newPar.appendChild(text);
console.log(newPar);
const h2 = document.querySelector(".item-list h2");
console.log(h2);
h2.after(newPar);

const myInput = document.getElementById("input").value;
console.log(myInput);

newPar.id = "par";
newPar.className = "center red";

newPar.classList.add("bg-yellow", "left");
