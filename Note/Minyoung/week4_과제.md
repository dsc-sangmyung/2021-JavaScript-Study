# JS Study week4 과제

## 6.3 변수의 유효범위와 클로저

**6.3.6 클로저를 이용하여 합 구하기**
```javascript
function sum(num1) {
  return function(num2) {
    return num1 + num2;
  };
}
```

**6.3.7 Is variable visible?**
- error가 발생한다.
- ReferenceError: Cannot access 'x' before initialization

**6.3.8 함수를 이용해 원하는 값만 걸러내기**
```javascript
function inBetween(a, b) {
    return function(num) {
        return num >= a && num <= b;
    };
}

function inArray(arr) {
    return function(array) {
        return arr.includes(array);
    };
}
```

**6.3.9 필드를 기준으로 정렬하기**

```javascript
function byField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}
```

**6.3.10 함수를 사용해 군대 만들기**

- 잘 모르겠어서 해답 일단 적어놓음..ㅠㅠ

```javascript
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;		// code 추가
    let shooter = function() { // shooter 함수
      alert( j );	// i -> j, should showo its number
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5
```
