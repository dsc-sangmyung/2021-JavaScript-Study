## 2주차 과제
### 함수
#### Q1. else는 정말 필요할까요?
```javascript
동일하게 작동 됩니다.
```
#### Q2. '?'나 '||'를 사용하여 함수 다시 작성하기
```javascript
1. ? 사용
function checkAge(age) {
    return (age>18)?true:confirm('보호자의 동의를 받으셨나요?');
  }
2. || 사용
function checkAge(age) {
  return (age > 18) || confirm('보호자의 동의를 받으셨나요?');
}
```
#### Q3. min(a, b) 함수 만들기
```javascript
function main(a,b){
    if(a<b){
        return a;
    }
    else if(a= b){
        return a;
    }
    else{
        return b;
    }
}
```
#### Q4. pow(x,n) 함수 만들기
```javascript
function pow(x,n){
    let result = x; // 여기 왜 result = x 로 두는지?

    for(let i = 1; i<n ; i++){
        result *= x;
    }
    return result;
}
let x = prompt("x?", '');
let n = prompt("n?",'');

if(n<1){
    alert(`${n}은 양의 정수이어야 합니다.`);
}
else{
    alert(pow(x,n));
}
```
### 화살표 함수 기본
#### Q1. 화살표 함수로 변경하기
```javascript
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "동의하십니까?",
    ()=> { alert("동의하셨습니다."); },
    ()=> { alert("취소 버튼을 누르셨습니다."); }
  );
  ```
### 프로토타입 상속
#### Q1. 프로토타입 이해하기
```javascript
1. true
2. null
3. undefined
```
#### Q2. 검색 알고리즘
```javascript
1. 
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

alert( pockets.pen );  
alert( bed.glasses ); 

2. 차이가 없다.
```

#### Q3. 어디에서 쓸까요?
```javascript
메서드 rabbit.eat은 프로토타입에서 처음으로 발견되지만, this엔 rabbit이 할당되어 실행된다.
```
#### Q4. 왜 햄스터 두 마리의 배는 꽉 찰까요?
```javascript
lazy.stomach.push(...)와 speedy.stomach.push()를 호출했을 때 모두, 프로퍼티 stomach을 프로토타입에서 발견합니다(stomach이 객체 자체에 있지 않기 때문입니다). 따라서 새로운 데이터는 stomach에 추가됩니다.
```

### 함수의 prototype 프로퍼티
#### Q1. 'prototype' 변경하기
```javascript
1. true 
2. false
3. true
4. undefined
```
#### Q2. 동일한 생성자 함수로 객체 만들기
```javascript
let obj2 = new obj.constructor(); 
constructor 프로퍼티에 제대로 된 값이 저장되어있다면 위와 같은 접근법이 가능

```
### 네이티브 프로토타입
#### Q1.메서드"f.defer(ms)"를 함수에 추가하기
```javascript
Function.prototype.defer(ms){
    setTimeout(this,ms);
};
function f() {
    alert("Hello!");
  }
  
  f.defer(1000); // 1초 후 "Hello!" 출력
```
### 프로토타입 메서드와 __proto__가 없는 객체
#### Q1. 사전에 toString 추가하기

```javascript

```
#### Q2. 호출 간의 차이점
```javascript
1. Rabbit : this는 실제 점 앞에 있는 객체를 나타내기 때문에
2. undefined
3. undefined
4. undefined

```







