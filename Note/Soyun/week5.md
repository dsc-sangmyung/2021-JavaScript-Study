## 5주차 과제
### new 연산자와 생성자 함수
#### Q1. 함수 두 개로 동일한 객체 만들기
```javascript
가능하다. 그러나, 두함수 모두 this대신 객체를 반환하게 된다.
```
#### Q2. 계산기 만들기
```javascript
function Calculator() {

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
```

#### Q3. 누산기 만들기
```javascript
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('더할 값을 입력해주세요.', 0);
  };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
```

### 숫자형
#### Q1. 6.35.toFixed(1) == 6.3인 이유는 무엇일까요?
```javascript
10진법으로 나타낸 소수 6.35는 내부적으로는 2진법 무한소수이기 때문이다. 그렇다면 6.35를 정확하게 반올림하기 위해서는
반올림 하기전 정수와 가깝게 만들어 주어야한다.
alert( (6.35 * 10).toFixed(20) );
↓
alert( Math.round(6.35 * 10) / 10);
```
#### Q2. 숫자를 입력할 때까지 반복하기
```javascript
function readNumber() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`Read: ${readNumber()}`);
````
#### Q3. An occasional infinite loop
````javascript
i가 절대 10이 될 수 없기 때문이다. 
````
#### Q4. A random number from min to max
```javascript
function random(min, max) {
  return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );
```

#### Q5. A random integer from min to max
```javascript
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

alert( randomInteger(1, 3) );
```
### Date 객체와 날짜
#### Q1. 날짜 생성하기
```javascript
let d1 = new Date(2012, 1, 20, 3, 12);
alert( d1 );
```
#### Q2. 요일 보여주기
```javascript
function getWeekDay(date) {
  let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

  return days[date.getDay()];
}

let date = new Date(2014, 0, 3); 
alert( getWeekDay(date) ); 
```
#### Q3. 달의 마지막일 
```javascript
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

alert( getLastDayOfMonth(2012, 0) ); 
alert( getLastDayOfMonth(2012, 1) ); 
alert( getLastDayOfMonth(2013, 1) );

```
