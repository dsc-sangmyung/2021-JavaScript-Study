## 1주차 과제
### Hello world
#### Q1. alert 창 띄우기
   ```javascript
    <head>
    <script>
        alert("자바스크립트!")
    </script>
    </head>
   ```
  
 #### Q2. 외부 스크립트를 이용해 alert 창 띄우기
 
 ##### hello.html
 ```javascript
    <head>
    <script src="./hello.js"></script>
    </head>
  ```
##### hello.js
    alert("자바스크립트!");
### 변수와 상수  
#### Q1. 변수 가지고 놀기
```javascript
    let admin, name;

    name = "John";
    admin = name;
    alert(admin);
```   
#### Q2. 올바른 이름 선택하기
```javascript
    let planetName = "Earth";
    
    let VisiterName = "soyun";
 ```
    
#### Q3. 대문자 상수 올바르게 사용하기
```javascript
    const BIRTHDAY = '18.04.1982';

    let age = someCode(BIRTHDAY);
   ```
이유 : 대문자 상수는 실행 전에 이미 값을 알고 있고, 코드에서 직접 그 값을 쓰는 경우에 사용한다.

### 자료형
#### Q1. 문자열 따옴표
```javascript
let name = "Ilya";

alert( `hello ${1}` ); //hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya
```
### alert, prompt .... 상호작용
#### Q1. 간단하게 페이지 만들기
```javascript
let name = prompt('이름을 입력해주세요.');
alert(name);
```
### 비교 연산자
#### Q1. 비교
```javascript
5 > 4 //true
"apple" > "pineapple" //false
"2" > "12" //true 숫자 순으로 비교 한다. 
undefined == null //true
undefined === null //false
null == "\n0\n" //true
null === +"\n0\n" //false
```
###  if와 ?를 사용한 조건 처리
#### Q1. if와 문자열 0
```javascript
실행 가능하다.
"0"또한 비어있지 않은 문자열이기 때문이다. 
```
#### Q2. javascript의 공식 이름 
```javascript
let value = prompt("What's the “official” name of JavaScript?");
//prompt 문자 데이터를 입력받을 수 있음.

if(value == 'ECMAScript'){
    alert("Right!");
}
else{
    alert("You don't know? “ECMAScript!");
}
```
#### Q3. 입력받은 숫자의 부호 표시하기
```javascript
let value = prompt("숫자를 입력해주세요");
//prompt 문자 데이터를 입력받을 수 있음.

if(value>0){
    alert("1");
}
else if(value < 0 ){
    alert("-1")
}
else{
    alert("0");
}
```
#### Q4. if 를 ?로 교체하기
```javascript
let result = (a + b < 4)? '미만' : '이상';
```
#### Q5. if .. else를 ?로 교체하기
```javascript
let message = (login == '직원') ? '안녕하세요.' :
(login == '임원') ? '환영합니다.' :
(login == '') ? '로그인이 필요합니다.' : '';
```

### 논리 연산자
#### Q1. 다음 OR 연산의 결과는 무엇일까요?
```javascript
2가 출력
```
#### Q2. Or 연산자의 피연산자가 alert라면?
```javascript
2가 출력
```
