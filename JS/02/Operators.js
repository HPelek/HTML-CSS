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

console.log(
  name + " is " + (new Date().getFullYear() - yearOfBirth) + " years old"
);

console.log(`${name} is ${2022 - yearOfBirth} 
years old`);

// const pi = 3.14;
// const r = +prompt("please enter r:");
// const r = Number(prompt("please enter r:"));
// console.log(r);
// const square = pi * r * r;
// const square = pi * r ** 2;

// console.log(`Square of circle: ${square}`);
// console.log(`Square of circle: ${square.toFixed(2)}`);

// console.log(`Square of circle: ${Math.floor(square)}`);
// console.log(`Square of circle: ${Math.ceil(square)}`);
// console.log(`Square of circle: ${Math.trunc(square)}`);
// console.log(`Square of circle: ${Math.round(square)}`);
// console.log(`Random Number ${Math.random(square)}`); //*! Sıfır ile bir arasında bir sayı üretitir */

//?Bazi fonksiyonlar
// Math.floor();  //* her zaman en yakin alt tamsayiya yuvarlar
// Math.ceil();  //* her zaman en yakin ust tam tamsayiya yuvarlar
// Math.trunc(); //* sayinin tam kismini alir.
// Math.round(); //* en yakin tam sayiya yuvarlar.
// Math.random(); //* 0 ve 1 arasında rasgele sayi uretir.

const rasgele = Math.round(Math.random() * 100);
console.log(rasgele);

let a = 5;
a++;
console.log(a++);
y = a + 5;
console.log(--y);

let z = 4;
z += 10;

console.log(z);
let k = 20;
k -= 10;
console.log({ k });

let b = 4;
b *= 3;
console.log({ b });

// const number = prompt("Please Enter 3 dijit number:");

// const ones = number % 10;
// const tens = Math.floor(number / 10) % 10;
// const hundereds = Math.trunc(number / 100);
// console.log(`ones: ${ones}, tens: ${tens}, hundereds: ${hundereds}`);

const num1 = 3;
console.log(num1 == 3);
console.log(num1 === 3);
console.log(num1 === "3");

const num2 = "3";
console.log(num1 == num2);
console.log(num1 != num2);

const num3 = 5;
const num4 = "1";
console.log(num1 > num3);
console.log(num1 <= num3);
console.log(num2 > num4);

// * ================================================
// *            MANTIKSAL OPERATORLER
// * ================================================

const v1 = true;
const v2 = false;

console.log(v1 && v2); //? false
console.log(v1 || v2); //? true

console.log(!v1); //?false

//? Ornek:
// const age = prompt("Please enter your age:");
// const healty = confirm("are you healty?");
// console.log(age, healty);

// if (age >= 18 && healty == true) {
//   console.log("Ehliyet alabilir");
// } else {
//   console.log("ehliyet alamaz");
// }

const nal = null;
const tanimsiz = undefined;
const bos = "";
const sayiDegil = NaN;
const sifir = 0;
const falsy = false;
console.log(Boolean(0)); //? False
console.log(Boolean(5)); //? True
console.log(Boolean(-5)); //? True
console.log(Boolean(12.4)); //? True
console.log(Boolean(0)); //? True

console.log(v1 && null); //? null
console.log(v1 && false && true && true); //? False
console.log(v1 && 0); //? 0
console.log(v1 || 0); //? true

const num5 = 0;
if (num5 === true) {
  console.log("Sayi sifir degildir");
} else {
  console.log("Sayi sifirdir");
}

// * ================================================
// *            TIP DONUSUMLERI
// * ================================================

const dolar = "1000";
const tl = "500";

const totalMoney = Number(dolar) + Number(tl);
const totalMoney2 = parseInt(dolar) + parseInt(tl);
const totalMoney3 = parseFloat(dolar) + parseFloat(tl);
const totalMoney4 = +dolar + +tl;
console.log(totalMoney);
console.log(totalMoney2);
console.log(totalMoney3);
console.log(totalMoney4);

console.log(Number(null)); //? 0
console.log(Number("")); //? 0
console.log(Number("12.3")); //? 12.3
console.log(String(55)); //? String
console.log(Number("1ab")); //? NaN
console.log(Number("0b101")); //? 5 (Binary Sayı sisteemi)
console.log(Number("0x10")); //? 16 (Hex Sayı sistemi)
