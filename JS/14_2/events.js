//* ======================================================
//*                        EVENTS
//* ======================================================

console.log("****** EVENTS *******");

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------
const h1 = document.querySelector("header h1");
const langInput = document.getElementById("input");
let newlist = null;
const buton = document.getElementById("btn");
const ul = document.createElement("ul");
buton.after(ul);
console.log(h1);

//! event fonsiyon
h1.onmouseover = function () {
  h1.style.color = "red";
};

//! event fonsiyon
h1.onmouseout = () => {
  h1.style.color = "black";
};

const print = () => {
  document.write("PRINT");
};

// document.getElementById("btn").onclick = () => {
//   alert("Btn Clicked");
// };

document.getElementById("btn").addEventListener("click", () => {
  console.log(langInput.value);
  !langInput.value
    ? alert("Please enter a value")
    : (ul.innerHTML += `<li>${langInput.value}</li>`);
  langInput.value = "";
  langInput.focus();
});

langInput.addEventListener("keydown", (event) => {
  console.log(event);
  // if (event.keyCode === 13) {
  //   buton.click();
  // }
  if (event.code === "Enter") {
    buton.click();
  }
});

window.onload = print();

window.addEventListener("load", () => {
  langInput.focus();
});
