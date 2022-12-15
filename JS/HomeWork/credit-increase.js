const salary = +prompt("Please Current Salary");
const minimumwage = 1800;

salary >= minimumwage
  ? alert(`Your new salary is ${Math.round(salary * 1.1)}`)
  : alert(`Your new salary is ${Math.round(salary * 1.5)}`);

const income = +prompt("write income:");
const expense = +prompt("write expense:");

const difference = income - expense;

difference >= 1800 ? alert("Get Credit") : alert("Get NOT Credit");
