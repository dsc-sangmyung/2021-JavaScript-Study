# JS Study week3 과제

## 4.1 객체

**4.1.1 객체야 안녕?**
```javascript
let user = {};			// 1
user.name = "John";		// 2
user.surname = "Smith";	// 3
user.name = "Pete";		// 4
delete user.name;		// 5
```

**4.1.2 객체가 비어있는지 확인하기**
```javascript
function isEmpty(obj) {
  for (let key in obj){
    if (key == undefined) return true;
    else return fasle;
  }
}
```

**4.1.3 변하지 않는 객체?**
- 가능하다.
- `const`는 객체의 프로퍼티를 변경하는 것까지는 간섭하지 않는다.

**4.1.4 프로퍼티 합계 구하기**
```javascript
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let name in salaries) {
  sum += salaries[name];
}
```

**4.1.5 프로퍼티 값 두 배로 부풀리기**

```javascript
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") obj[key] *= 2;
  }
}
```



## 4.4 메서드와 this

**4.4.1 객체 리터럴에서 'this' 사용하기**

- 에러가 발생한다.
- `makeUser()` 내 `this`는 함수로써 호출됐기 때문에 `undefined`이다. 
- `this` 값은 전체 함수가 되고 따라서 `ref: this`는 함수의 현재 `this` 값을 가져온다.

**4.4.2 계산기 만들기**
```javascript
let calculator = {
  read() {
    this.val1 = prompt("value1: ", 0);
    this.val2 = prompt("value2: ", 0);
  }, 
  sum() {
    return this.val1 + this.val2;
  }, 
  mul() {
    return this.val1 * this.val2;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
```

**4.4.3 체이닝**
```javascript
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
```



## 6.3 변수의 유효범위와 클로저

**6.3.1 Does a function pickup latest changes?**
- `Pete`가 출력된다.

**6.3.2 Which variables are available?**
- `Pete`가 출력된다.

**6.3.3 counter는 독립적일까요?**
- `0`과 `1`이 출력된다.

**6.3.4 counter 객체**
- 잘 작동한다.
- `1`, `2`, `1`이 차례대로 출력된다.

**6.3.5 if 문 안의 함수**
- 에러가 발생한다.
- `sayHi()` 함수는 `if`문 안에서 정의했기 때문에 외부에서 접근할 수 없다.
