// 1. Yetkisiz kullanıcılardan korunmak için e-posta adreslerini gizlemek için bir JavaScript fonksiyonu yazın.
// Test Verisi: console.log(protect_email("robin_singh@example.com")); "robin...@example.com"
// 2. Bir dizideki tüm elemanların ortalamasını hesaplayan bir JavaScript fonksiyonu yazın. Test Verisi: console.log(average([1,2,3,4,5])); 3
// 3. verilen pozitif olmayan bir tamsayıyı argüman olarak alan ve rakamları azalan sırada döndüren bir fonksiyon yazmaktır. Özetle, rakamları yeniden düzenleyerek mümkün olan en yüksek sayıyı oluşturun.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321
// 4. Verilen bir string'de sesli harfleri (a, e, i, o, u) filtreleyin ve sadece sesli harfler olmayan kalan harfleri birleştirin.
// Examples:
// Input: "day" Output: "d"
// Input: "apple" Output: "ppl"
// Input: "javascript" Output: "jvscrpt"
// 5- Bir JavaScript dizisinde tekrar eden  değerleri bulan bir JavaScript programı yazın.
// Examples:
// Input: [1, 2, 3, 2, 1, 4, 5, 6, 7, 8, 9, 9, 10]
// Output: 1, 2, 9
// 6. Elemanları sayılardan oluşan bir listenin elemanlarının karelerinin toplamını bulan bir JavaScript programı yazın.
// Examples:
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Output: 285

let email = "robin_singh@example.com";
let emailName = email.split(`@`)[0];
console.log(
  emailName.slice(0, emailName.length - 3) + `...@` + email.split(`@`)[1]
);

function emailVlidate(email) {
  let emailName = email.split(`@`)[0];
  return (
    emailName.slice(0, emailName.length - 3) + `...@` + email.split(`@`)[1]
  );
}
console.log(emailVlidate(email));
// --------------------------------------------------------------------------------
// let dizi = [1, 2, 3, 4, 5];

// let reduce = dizi.reduce((preVal, cruVal) => preVal + cruVal);
// console.log(reduce);

// function average(dizi) {
//   let sum = 0;
//   return;
// }

// let sum = 0;
// function average(dizi) {
//   dizi.forEach((num) => (sum += num));
//   return sum / dizi.length;
// }
// console.log(average(dizi));
//--------------------------------------------------------------------------------

let sayi = 42145;

function reverse(num) {
  return +num.toString().split(``).sort().reverse().join(``);
}
console.log(reverse(sayi));
//-----------------------------------------------------------------------------------

let str = "javascript";

function name(str) {
  let list = str.split(``);
  let vowel = `aeioıuü`;
  let filt = list.filter((e) => vowel.includes(e));
  console.log(filt);
  return filt.join(``);
}
console.log(name(str));
