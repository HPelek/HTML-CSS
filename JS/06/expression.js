// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("*** 2-EXPRESSION ****");

//* ORNEK1:
//***********************************************/

const printHello = function printHello() {
  console.log("Hello");
};

printHello(); //! invoke call
printHello(); //! invoke call

let oddOrEven = function oddOrEven(num) {
  return num % 2 ? "ODD" : "EVEN";
};

console.log(oddOrEven(7));
console.log(oddOrEven(10));

const findbiggest = function (n1, n2, n3) {
  let biggest = n1;
  if (n2 >= biggest) {
    biggest = n2;
  }

  if (n3 >= biggest) {
    biggest = n3;
  }
  return biggest;
};

console.log(`The biggest:${findbiggest(2, 1, 4)}`);
console.log(`The biggest:${findbiggest(21, 11, 14)}`);
console.log(`The biggest:${findbiggest(-2, 11, 114)}`);
console.log(`The biggest:${findbiggest(-2, -111, -114)}`);
console.log(`The biggest:${findbiggest(-2, 0, -114)}`);
console.log(`The biggest:${findbiggest(-2, "", -114)}`);

const add = function (n1, n2) {
  return n1 + n2;
};
const sub = function (n1, n2) {
  return n1 - n2;
};
const div = function (n1, n2) {
  return n1 / n2;
};
const mul = function (n1, n2) {
  return n1 * n2;
};

const compute = function (n1, n2, op) {
  let = result = 0;
  switch (op) {
    case "+":
      result = add(n1, n2);
      break;
    case "-":
      result = sub(n1, n2);
      break;
    case "/":
      result = div(n1, n2);
      break;
    case "*":
      result = mul(n1, n2);
      break;
    default:
  }
  return result;
};

console.log(compute(4, 3, "-"));
console.log(compute(7, 2, "*"));
console.log(compute(97, 3, "/"));
