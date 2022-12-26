console.log("**** 3-ARROW ***");

// //? Hacim = pi x r x r x h

// const r = +prompt("r:");
// const h = +prompt("h:");

// const volume = (r, h) => Math.PI * r * r * h;

// console.log(`${r}, ${h} = Volume: ${volume(r, h).toFixed(4)}`);

// console.log(`${r}, ${h} = Volume: ${volume(r, h).toPrecision(4)}`);

// console.log(`${r}, ${h} = Volume: ${volume(r, h).toExponential(4)}`);

// //! Alternatif olarak:
// const volumeLong = (r, h) => {
//   const result = Math.PI * r * r * h;
//   console.log(result);
//   return result;
// };
// onsole.log(`${r}, ${h} = Volume: ${volumeLong(r, h).toExponential(4)}`);

// //* Yas hesaplama
// //! Önce tanımla sonra kullan
// const calculateAge = (year) => new Date().getFullYear() - year;

// console.log("AGE", calculateAge(1990));

//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...

const fibo = (n) => {
  let fib1 = 1;
  let fib2 = 1;
  let sum = 0;
  for (let i = 3; i <= n; i++) {
    sum = fib1 + fib2;
    fib1 = fib2;
    fib2 = sum;
  }
  return fib2;
};

const n = +prompt("Please Enter n:");
if (n <= 0) {
  console.log("n soul be bigger than zero");
} else {
  console.log(`Fibonacci(${n})= ${fibo(n)}`);
}
