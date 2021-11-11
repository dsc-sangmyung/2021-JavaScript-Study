# JS Study week2 과제

## 2.15 함수

**2.15.1 "else"는 정말 필요한가요?**
- 동일하게 작동한다.

**2.15.2 '?'나 '||'를 사용하여 함수 다시 작성하기**
1. 물음표 연산자 `?`를 사용하여 본문을 작성
```javascript
function checkAge(age) {
  return (age > 18)? true: confirm('보호자의 동의를 받으셨나요?');
}
```

2. OR 연산자 `||`를 사용하여 본문을 작성
```javascript
function checkAge(age) {
  return (age > 18) || confirm('보호자의 동의를 받으셨나요?');
}
```

**2.15.3 min(a, b) 함수 만들기**
```javascript
function min(a, b) {
    return (a >= b)? b: a;
}
```

**2.15.4 pow(x,n) 함수 만들기**
```javascript
function pow(x, n) {
  let result = x;
  for (let i = 0; i < n i++) {
    result *= x;
  }
  return result;
}
let x = prompt("x 입력: ", '');
let n = prompt("n 입력: ", '');
if(n < 1) alert('n은 1이상의 자연수이어야 함!!');
else alert(pow(x, n));
}
```



## 2.17 화살표 함수 기본

**2.17.1 화살표 함수로 변경하기**

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
  "동의하십니까?",
  () => alert("동의하셨습니다."), 
  () => alert("취소 버튼을 누르셨습니다."), 
);
```



## 8.1 프로토타입 상속

**8.1.1 프로토타입 이해하기**

1. `true`
2. `null`
3. `undefined`

**8.1.2 검색 알고리즘**
1. `pockets` → `bed` → `table` → `head`의 경로를 따르도록 프로토타입을 할당
```javascript
let head = {
  glasses: 1
};
let table = {
  __proto__: head, 
  pen: 3
};
let bed = {
  __proto__: table, 
  sheet: 1,
  pillow: 2
};
let pockets = {
  __proto__: bed, 
  money: 2000
};
```

2. 모던 엔진에서는 객체에서 프로퍼티를 가져오는 것과 객체의 프로토타입에서 프로퍼티를 가져오는 것 사이에 성능적인 차이가 없다.

**8.1.3 어디에서 쓸까요?**
- `rabbit`이 프로퍼티를 받는다.

**8.1.4 왜 햄스터 두 마리의 배는 꽉 찰까요?**

```



## 8.2 함수의 prototype 프로퍼티

**8.2.1 'prototype' 변경하기**
1. `true`
2. `false`
3. `true`
4. `undefined`

**8.2.2 동일한 생성자 함수로 객체 만들기**
```javascript
function Rabbit(name) {
    this.name = name;
}
let rabbit = new Rabbit('White Rabbit');
let rabbit2 = new rabbit.constructor('Black Rabbit');
// 동작하지 않는 예시
function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype = {};
let rabbit = new Rabbit('White Rabbit');
let rabbit2 = new rabbit.constructor('Black Rabbit');
```



## 8.3 네이티브 프로토타입

**8.3.1 메서드"f.defer(ms)"를 함수에 추가하기**
```javascript
Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
}
function f() {
  alert("Hello!");
}
f.defer(1000); // 1초 후 "Hello!" 출력
```

**8.3.2 데코레이팅 "defer()"를 함수에 추가하기**
```



## 8.4 프로토타입 메서드와 __proto__가 없는 객체

**8.4.1 사전에 toString 추가하기**
```javascript
let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join();
    }
  };
});
// 데이터를 추가합니다.
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__는 여기서 일반적인 프로퍼티 키입니다.
// 반복문에는 apple과 __proto__ 만 있습니다.
for(let key in dictionary) {
  alert(key); // "apple" 다음 "__proto__"입니다.
}
// toString이 동작하는 부분입니다.
alert(dictionary); // "apple,__proto__"
```

**8.4.2 호출 간의 차이점**
1. `Rabbit`
2. `undefined`
3. `undefined`
4. `undefined`
