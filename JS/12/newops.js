//* ======================================================
//*  DESTRUCTURING (OBJECT)
//* ======================================================
console.log("****** NEW OPERATORS *******");

// const car = {
//   name: "BMW",
//   model: 1990,
//   engine: 1.5,
//   colors: ["red", "yellow"],
// };

// const name1 = car.name;
// const model1 = car["model"];
// console.log(name1);

// const { name, model, colors } = car;
// console.log(name, model);

// const { engine: motor } = car;

// console.log(motor);
// // motor = 2.0;
// console.log(motor, car);
// car.engine = 2.2;
// console.log(car);

//* EXAMPLE: NESTED
// const cars = {
//   car1: {
//     name: "BMW",
//     model: 1990,
//     engine: 1.6,
//   },
//   car2: {
//     name: "Mercedes",
//     model: 2022,
//     engine: 2.0,
//   },
// };

// const { car1, car2 } = cars;

// console.log(car1, car2);
// console.log(car1.name, car2.engine);

// const { bame: nameCar1, engine: engineCar1 } = car1;
// const { bame: nameCar2, engine: engineCar2 } = car2;
// console.log(nameCar1, engineCar2);

/** Example */
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "Josh",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];

team.forEach((t, i) => {
  console.log(i + 1 + ".NAME:", t.name);
  console.log("NAME", t.name);
  console.log("SURNAME", t.surname);
  console.log("JOB", t.job);
  console.log("age", t.age);
  console.log("**********");
});

team.forEach((person, i) => {
  const { name, surname, job, age } = person;
  console.log(i + 1 + ".NAME:", name);
  console.log("NAME", name);
  console.log("SURNAME", surname);
  console.log("JOB", job);
  console.log("age", age);
  console.log("**********");
});

const getInfo = () => {
  return {
    id: new Date().getTime(),
    productName: "MacBook",
    price: 50000,
  };
};
console.log(getInfo);

const { productName, price } = getInfo();
console.log("PRICE:", price);

const calculate = ({ price, name }) => {
  console.log("NAME:", name);
  console.log("PRICE:", price * 1.2);
};

calculate({ price: 50000, name: "MacBook" });

// const check = ({ a, b, c }) => {
//   console.log(a, b, c);
// };

const check = (data) => {
  const { a, b, c } = data;
  console.log(a, b, c);
};

const data = {
  a: 1,
  b: 2,
  c: 3,
};

check(data);
