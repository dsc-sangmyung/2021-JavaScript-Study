let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(BigInt);



let quot = input[0] / input[1];
let rest = input[0] % input[1];

let answer = quot + '\n';
answer += rest;
console.log(answer);