//! Declaration
function printHello() {
  console.log("Hello");
}

printHello(); //! invoke call
printHello(); //! invoke call

function greet(FirstName, Lastname = "") {
  console.log(`Hi, ${FirstName} ${Lastname}`);
}

greet("huseyin", "pelek");

// const name = prompt("Your Name");
// const surname = prompt("Your Surname");
// greet(name, surname);

greet("pelek");
