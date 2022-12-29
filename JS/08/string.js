// let str1 = "This is a string";
// let str2 = "This is a string";
// let str3 = `This is a string`;
// let str4 = new String("This is a string");

// console.log(typeof str2);
// console.log(typeof str3);
// console.log(typeof str1);
// console.log(typeof str4);

// console.log(str1.length);
// console.log(str4);

// let str1 = "Clarusway";
// let str2 = "Full Stack";
// let str3 = "";
// let str4 = str1 + " " + str2;
// console.log(str1.concat(" ", str2));
// console.log(str4);

// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);
// console.log(str4.length);

// let str = "Hello world";

// console.log(str[str.length - 1]);
// for (i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// for (i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
// }

// let a = 5;
// let b = a;
// console.log(a, b);
// a = 10;
// console.log(a, b);

// console.log("Merhaba\tDünya");
// console.log("Merhaba\nDünya");
// console.log("Merhaba\0Dünya");
// console.log(`Merhaba

// Dünya`);

// let str1 = "Clarusway";

// console.log(str1.slice(1, 5));
// console.log(str1.substring(1, 5));
// console.log(str1.substring(5, 1));
// console.log(str1.slice(-8, -4));
// console.log(str1.substring(-8, -4));
// console.log(str1.substring(str1.length - 4));
// console.log(str1.slice(-5, 8));
// console.log(str1.substring(2, -5));
// console.log(str1.substring(2, 0));
// console.log(str1.substring(-5, 8));
// console.log(str1.slice(-5));
// console.log(str1);

let str = "Hello Jhon, Welcome to Clarusway.";
console.log(str.includes("welcome"));
console.log(str.includes("Welcome"));

let email = `huseyinpelek@gmail.com`;
console.log(email.includes(`@`));

if (email.includes(`@`)) {
  console.log("Email is valid");
} else {
  console.log(`Inlavid Email`);
}

console.log(email.indexOf(`@`));
if (email.indexOf(`@`) !== -1) {
  console.log("Email is valid");
} else {
  console.log(`Inlavid Email`);
}

console.log(email.indexOf(`.com`, email.indexOf(`@`)));

let str0 = "you do not KNOW what do not know until you know";
console.log(str0.indexOf("know", str0.indexOf("know") + 1));
console.log(str0.indexOf("KNOW"));
