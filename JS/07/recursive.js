console.log("****** 4 - RECURSION ********");

//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...
//! f(n) = f(n-1) + f(n-2)

const fibo = (n) => {
  if (n <= 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
};
const n = +prompt("Please Enter n:");
if (n <= 0) {
  console.log("n soul be bigger than zero");
} else {
  console.log(`Fibonacci(${n})= ${fibo(n)}`);
}
