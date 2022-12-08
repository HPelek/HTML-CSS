const fs = "Cohort 13";
console.log(fs);

const sayi = 20;
console.log(sayi);
console.log(typeof sayi);

const sayi1 = "33";
console.log(sayi1);
console.log(typeof sayi1);

// sayi1 = 55; //! Assigment to constant variable.

// const pi; //!Missing initializer in const declaration
// pi = 3.14

const s1 = "Hello ";
const s2 = "FS13";
console.log(s1 + s2); //? String Concationation

const n1 = "5";
const n2 = 10;
console.log(n1 + n2); //? String Concationation
// JS String üzerine uyarlanmış bir dildir.

// n2 = n2 + 1;
console.log(n2); //! Error

//?===================== LET ===========================

let dil = "JavaScript";
console.log(dil);

dil = "java";
console.log(dil);

dil = true;
console.log(dil, typeof dil);

dil = 3.14;
console.log(dil, typeof dil);

let cohort;
console.log(cohort); //?Undefined (tanımsız) Type yok anlamına geliyor.

cohort = 3;
console.log(typeof cohort);

let num1 = 5;
let num2 = 3;
let result = num1 + num2;
console.log(++result);
console.log(result);

count = 55;
console.log(count); //? var olarak tanımlanmış bir değişken
count = 60;
console.log(count);

//?===================== VAR ===========================

var x = 11;
console.log(x);
{
  //! Burasi local bir alandır.
  let a = 3;
  const b = 7;
  console.log(a, b);
}
//! a ve b bu kısımda tanımlı değildir. let ve const sadece localde kullanılır
// console.log(a, b);
{
  //! var ile tanımlanan değişken global olduğu için her yerden erişim sağlanabilir.
  var c = 17;
  console.log(c);
}
console.log(c);
