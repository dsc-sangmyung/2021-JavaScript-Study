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
