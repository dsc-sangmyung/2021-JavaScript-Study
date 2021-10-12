const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

let money = BigInt(input[0]);
let people = BigInt(input[1]);

console.log(money/people + "\n" + money%people);