const n1 = +prompt(`Please Enter Number:`);
const operator = prompt("Enter operator (either +, -, * or /)");
const n2 = +prompt(`Please Enter Number:`);

if (operator == `+`) {
  console.log(`result is ${n1 + n2}`);
} else if (operator == `-`) {
  console.log(`result is ${n1 - n2}`);
} else if (operator == `*`) {
  console.log(`result is ${n1 * n2}`);
} else if (operator == `/`) {
  console.log(`result is ${n1 / n2}`);
} else {
  console.log(Wrong);
}
