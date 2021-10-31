## 6주차 과제
### new 연산자와 생성자 함수
#### Q1. 함수 두 개로 동일한 객체 만들기
```javascript
자바에서 문자열을 수정하는것은 불가능하다.
function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("john") ); 
```
#### Q2. 스팸 문자열 걸러내기
```javascript
function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );
```
#### Q3. 스팸 문자열 걸러내기
```javascript
function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
```
#### Q4. 숫자만 추출하기
```javascript
function extractCurrencyValue(str) {
  return +str.slice(1);
}
+a : slice() 메서드는 어떤 배열의 begin 부터 end 까지( end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다.
```
### 배열
#### Q1. 배열은 복사가 될까요?
```javasciprt
4가 출력
```
#### Q2. 배열과 관련된 연산
```javasciprt
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");
```
#### Q3. 배열 컨텍스트에서 함수 호출하기
```javasciprt
```
#### Q4. 입력한 숫자의 합 구하기
```javasciprt
function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("숫자를 입력해 주세요.", 0);
    
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert( sumInput() );
```

#### Q5. 최대합 부분 배열
```javasciprt
문제 이해x..
```
### 배열과 메서트
#### Q1.border-left-width를 borderLeftWidth로 변경하기\
```javascript
function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word'] -> 문자열을 'separator'로 잘라서, 'limit' 크기 이하의 배열에 잘라진 문자열을 저장하여 리턴
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
```
#### Q2.특정 범위에 속하는 요소 찾기
```javascript
function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (조건에 맞는 요소)

alert( arr );
```
#### Q3. 특정 범위에 속하는 요소 찾기(배열 변경하기)
```javascript
function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // 범위 밖의 요소를 제거함
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // 1과 4 사이에 있지 않은 요소는 모두 제거함

alert( arr ); // [3, 1]
```
#### Q4. 내림차순으로 정렬하기
```javascript
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr );
```

#### Q5. 배열 복사본을 정렬하기
```javascript
function copySorted(arr) {
  return arr.slice().sort(); =>slice를 사용하여 정렬 
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted );
alert( arr );
```

#### Q6. 확장 가능한 계산기
```javascript
function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}
```
#### Q7. 이름 매핑하기
```javascript
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary
```
#### Q8. 객체 매핑하기
```javascript
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // John Smith
```

#### Q9. 나이를 기준으로 객체 정렬하기
```javascript
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now sorted is: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete
```
#### Q10. 배열 요소 무작위로 섞기
```javascript
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];
shuffle(arr);
alert(arr);
```

#### Q11. 배열 요소 무작위로 섞기
```javascript
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // 28
```

#### Q12. 중복 없는 요소 찾아내기
```javascript
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); 
```
#### Q13. Create keyed object from array
```javascript
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}
```
### setTimeout과 setInterval을 이용한 호출 스케줄링
#### Q1. setTimeout 은 무엇을 보여줄까요?
```javascript
 100000000이 출력
```
#### Q2. 일초 간격으로 숫자 출력하기
```javascript
function printNumbers(from, to) {
  let current = from;

  let timerId = setInterval(function() {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

// usage:
printNumbers(5, 10);
```
