const car = new Object();
car.brand = "volvo";
car.model = "1990";
car.colour = "red yellow";

console.log(car);

console.log(car.model);
console.log(car["colour"]); //** Bu yöntemin avantajı Değişken olarak kullanılabilmesi */

function Personel(id, ad, maas) {
  this.tc = id;
  this.name = ad;
  this.salary = maas;
}

const p1 = new Personel("123456789", "Selim", 4000);

console.log(p1);

const p2 = new Personel("2345133489", "Selin", 5000);

console.log(p2);

console.log(this);

const worker = {
  name: "can",
  surname: "pelek",
  age: 40,
  languages: ["C++", "go", "java"],
  salary: 10000,
};
console.log(worker);
worker["languages"].forEach((lang) => console.log(lang));

const upperCaseLangs = worker["languages"].map((lang) => lang.toUpperCase());
console.log(upperCaseLangs);

worker.nationality = "T.C";
console.log({ worker });

const person = worker;
person.dob = 1983;
console.log({ person });

//**---------------------Object Metotları--------------------------------*/

const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
};
//! ASSIGMENT
//? person2'nin adini ve maasini yazdiriniz.
console.log(people.person2.name);
console.log(people.person2.salary);

//? people objesindeki tum salary 'leri yazdirin (Dongu kullanilmali)

for (let person in people) {
  console.log(people[person].salary);
  console.log(people[person].date);
}

//**Object Method */
console.log(Object.keys(people));
console.log(Object.values(people));
console.log(Object.entries(people));

for (let key of Object.keys(people)) {
  console.log(key);
}
for (let key of Object.values(people)) {
  console.log(key);
}

for (let [k, v] of Object.entries(people)) {
  console.log("KEY:", k, "VALUE:", v.job);
}

//? job'i developer olanlarin dob degerlerini yazdiriniz.
const devs = Object.values(people)
  .filter((p) => p.job === "developer")
  .forEach((p) => console.log(p.dob));

const dobs = Object.values(people)
  .filter((p) => p.job === "developer")
  .map((p) => p.dob);

//********************************************************
//* JSON => Javascript Object Notation
//********************************************************
const team = [
  { name: "Josh", surname: "Adams", job: "developer", age: 30 },
  { name: "Mary", surname: "Bary", job: "tester", age: 22 },
  { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
]; //* JSON
console.log(team);
console.log(team[1]);

// team.push({ name: "Ahmet", Surname: "yilmaz", job: "developer", age: 23 });

console.log(team);
//* Ornek1: team dizisindeki job'lari tek tek yazdiriniz.
team.forEach((p) => console.log(p.job));
//* Ornek2: age'leri bir artirarak yeni bir diziye saklayiniz.
// const ageIncByOne = team.map((x) => x.age + 1);
// console.log(ageIncByOne);

//* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
//* bunu fullName key'i olarak saklayan, ayni zamanda age degerlerini 5
//* arttirarak age key'ine saklayan ve olusan diziyi donduren kodu yazınız.

const teamFullName = team.map((p) => ({
  fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
  age: p.age + 5,
}));
console.log(teamFullName);

//* Ornek: teamFullName dizisindeki 30 yasindan kucuk ve esit olanlarin isimlerini diziye saklayiniz.

const teamUnder22 = teamFullName
  .filter((p) => p.age < 30)
  .map((p) => p.fullName);
console.log(teamUnder22);

//* Ornek6: ortalama yasi hesaplayiniz.
const avgAges =
  teamFullName.reduce((sum, person) => sum + person.age, 0) /
  teamFullName.length;
console.log(avgAges);
