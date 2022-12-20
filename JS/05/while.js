// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("****** WHILE *******");

let count = 1;
while (count <= 10) {
  console.log("Count:", count);
  count++;
}

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

// let grade = Number(prompt("your grade"));
// while (grade < 0 || grade > 100) {
//   console.log("Grade shoul be 0-100");
//   grade = Number(prompt("your grade"));
// }
// console.log("Your Grade :", grade);

let number = Number(prompt("your number"));
let counter = 0;
while (number > 0) {
  number = Math.floor(number / 10);
  console.log(number);
  counter++;
}
console.log(`digit count is ${counter}`);
