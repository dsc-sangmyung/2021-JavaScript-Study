//4.1
//객체야 안녕?
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//객체가 비어있는지 확인하기
function isEmpty(obj){
  for(let key in obj){
    return false;
  }
  return true;
}

//변하지 않는 객체?
const user = {
  name: "John"
};
user.name = "Pete";

//프로퍼티 합계 구하기
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let sum = 0;
for(let key in salaries){
  sum += salaries(key);
}
alert(sum);

//프로퍼티 값 두 배로 부풀리기 다시해봐야함
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

//4.4
//객체 리터럴에서 'this' 사용하기
오류가 난다

//계산기 만들기
let calculator = {
  sum(){
    return this.a + this.b;
  },

  mul(){
    return this.a * this.b;
  },

  read(){
    this.a = +prompt('첫 번째 값:', 0);
    this.b = +prompt('두 번째 값:', 0);
  }
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//체이닝
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    alert( this.step );
    return this;
  }
};

//Does a function pickup latest changes?
Pete

//Which variables are available?
Pete

//counter는 독립적일까요?
당연히 0,1 

//counter 객체
작동한다.

//if 문 안의 함수
오류남

//클로저를 이용하여 합 구하기
function sum(a){
  return function(b){
    return a + b;
  };
}

alert( sum(1)(2) );
alert( sum(5)(-1) );

//Is variable visible?
에러남

//확실히 이 다음 3문제는 공부가 더 필요해 보임

//백준1000번
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) {
    const input = line.split(' ');

    const result = Number(input[0]) + Number(input[1]);
    console.log(result);

    rl.close();
}).on('close', function () {
    process.exit();
});

//백준1001번
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) {
    const input = line.split(' ');

    const result = Number(input[0]) - Number(input[1]);
    console.log(result);

    rl.close();
}).on('close', function () {
    process.exit();
});

//백준1271번
const rl = require('readline').createInterface(process.stdin, process.stdout);

let input = [];

rl.on('line', (line) => {
  input = line.split(' ').map((x) => BigInt(x));
}).on('close', () => {
  const [n, m] = input;
  let answer = '' + n / m + '\n';
  answer += n % m;

  console.log(answer);
});
