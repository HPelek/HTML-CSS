console.log("*****Operator*****");
const cola = 20;
const gumm = 5;
const biscuits = 15;

const totalPrice = cola + gumm + biscuits;

console.log("TOTAL PRICE", totalPrice);
console.log("TOTAL PRICE:" + totalPrice);
const comment = totalPrice + "TL";
console.log(comment);

const firstName = "Huseyin";
const lastName = "Pelek";
console.log(firstName + " " + lastName);

const s1 = 5,
  s2 = 7,
  s3 = "5";
s4 = "three";
console.log(s1 + s2 + s3);
console.log(s1 * s3);
console.log(s1 - s3);
console.log(s1 - s4, typeof NaN);

const difference = s1 - s4;
console.log(difference);

console.log(isNaN(difference));

const yearOfBirth = 1990;
const name = "jane";
console.log(name + " is " + (2022 - yearOfBirth) + " years old");
