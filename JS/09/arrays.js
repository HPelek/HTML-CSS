// ?==============================================
// ?            DIZILER (ARRAYS)
// ?==============================================

console.log("***** ARRAYS ******");

//* Dizi Tanimlama
//*-----------------------------------------------
//! 1.Yöntem(Aray iteral)- Tercih edilen yöntem
const names = ["emir", "ogzuzhan", "levent", "tarik"];

console.log(names);
console.log(names.length);
console.log(typeof names);

// ! 2.Yöntem (Object Constructor)
const codingLangs = new Array("C", "C++", "JS", "Go");
console.log(codingLangs);

const numbers = new Array(3, 2, 1);
console.log(numbers); //? (3) [3, 2, 1]

//? 10 elemanli bos bir dizi olusturur.
const numbers1 = new Array(10);
console.log(numbers1); //?(10) [empty × 10]

// ! 3.Yöntem (Array.of())
const number2 = Array.of(1, 2, 3);
console.log(number2); //?(3) [1, 2, 3]

const numbers3 = Array.of(5);
console.log(numbers3); //? [5]

//!  Diziden veri okuma

//? Dizilere erisirken indis(index) yani sira numarasi kullanilir.
//? indisler 0'dan baslar ve dizinin eleman sayisinin bir eksigine
//? kadar devam eder.
//? Syntax => diziAdi[indis]

const names1 = [
  "emir",
  "oğuzhan",
  "levent",
  "tarik",
  "Sabata",
  "Mehtap",
  "Rose",
];
console.log(names1[1]); //? oğuzhan
const tarik = names1[3];
console.log(tarik); //?tarik

//? Dizinin en son elemanini okumak istiyoruz.
console.log(names1[5]); //? Mehtap, (hard-coded)

const lastEl = names1[names1.length - 1];
console.log(lastEl); //? Rose

//? Alternative olarak at() metodu
console.log(names1.at(-3)); //? Sabata

//!  Diziye veri yazma
names1[2] = "Levent";
// names1[2] = names1[2].toUpperCase()
//? assigning yapildiginda etki eder.

console.log(names1);

//! Identifier 'names' has already been declared
// const names = ["ismet", "canan"];

// names = ["ismet","canan"]; //! Assignment to constant variable.

//! NOT: Bir dizi const ile tanimlansada icerisindeki elemanlar
//! degisitirilebilir. Cunku diziler non-primitive verilerdir.
//! const ile tanimlanan bir dizinin referansi (baslangic adresini)
//! stack alaninda tutulurken dizinin elemanlari Heap alaninda tutulur.
//! Bu yüzden dizinin referansi bilindikten sonra icerisindeki elemanlari
//! degistirmek mumukundur.
//! const, sadece dizinin stackte tututlan adresinin degistirilmesini engeller.

//! Diziler farkli veri tiplerini bir arada saklayabilir.
const ageArr = [22, 44, 55];
const people = [
  "John",
  "Varmont",
  new Date().getFullYear() - 1990,
  true,
  ageArr,
];

console.log(people[4]); //?(3) [22, 44, 55]

console.log(++people[4][1]); //? 45

console.log(people); //?(3) [22, 45, 55]
console.log(ageArr); //?  ['John', 'Varmont', 33, true,  [22, 45, 55]]
ageArr[0]--;

console.log(people); //?(5) ['John', 'Varmont', 33, true, [21, 45, 55])]

//! Bir dizi icerisine baska bir diziyi koyarsak aslinda dizinin
//! tum verileri kopyalanmaz sadece o dizinin refransi konulur.
//! Dolayisiyla disarida bu dizideki bir degisikli diger dimizie de yansir.
//! Cunku JS cogu durumda sig (shallow copying) yapar.

//?================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//?================================================

const cars = ["BMW", "Mercedes", "Fiat", "Anadol"];

console.log(cars.pop()); //** Silme işlemi */
console.log(cars);

console.log(cars.push("lexus")); //** Ekleme işlemi */
console.log(cars);

// cars.push = "hyundai"; //? diziye yenir bir property(değişken) ekleme
// console.log(cars);
// console.log(cars.push);

console.log(cars.unshift("Tesla")); //** En başa ekleme */
console.log(cars);

console.log(cars.shift()); //** En baştan silme */
console.log(cars);

cars.splice(1, 0, "VW"); //? Araya üzerine yazmadan ekleme yöntemi.
console.log(cars);

cars.splice(3, 1, "Maseratti"); //? Araya üzerine ayazarak ekleme yöntemi.
console.log(cars);

cars.reverse();
console.log(cars);

cars.sort(); //** Textleri mantıklı bir şekilde sıralar */
console.log(cars);

const numbers4 = [2, 1, 3, 22, 4, 8, 5, 7, 6]; //** Sayıları HEX ile sıralıyor bu da yanlış çıkabilir */
numbers4.sort();
console.log(numbers4);
numbers4.sort((a, b) => a - b);
console.log(numbers4);
numbers4.sort((a, b) => b - a);
console.log(numbers4);
//?================================================
//?             DIZI ERISIM METOTLARI
//?================================================
