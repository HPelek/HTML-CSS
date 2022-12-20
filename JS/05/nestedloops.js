console.log("** NESTED FOR**");

let result;
let line = "";
for (let row = 1; row <= 10; row++) {
  for (let cow = 1; cow <= 10; cow++) {
    result = row * cow;
    line = line + result + "\t";
    // console.log(line);
  }
  //   console.log("-");
  line += "\n";
}
console.log(line);
