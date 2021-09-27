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
피연산자 중 첫 번째 truthy인 2가 출력.

#### Q2. Or 연산자의 피연산자가 alert라면?
```javascript
1과 2가 출력
```
- 첫번째 or연산자는 왼쪽 피연산자인 alert(1)를 평가함. (이때 첫 번째 얼럿 창에 1이 출력)
- alert메서드는 undefined를 반환하기 때문에, OR 연산자는 truthy를 찾기 위해 다음 피연산자를 평가함.
- 두 번째 피연산자(오른쪽 피연산자)인 2는 truthy이기 때문에 실행이 멈추고 2가 반환. 반환된 값 2는 제일 바깥 alert의 피연산자가 되어 두 번째 얼럿창에 출력.
- 평가가 alert(3)까지 도달하지 못하기에 출력 x

#### Q3. 다음 AND 연산자의 결과는?
```javascript
null 출력
```
 피연산자 중 첫번째 거짓 값인 null을 출력한다.

#### Q4. AND연산자의 피연산자가 alert라면?
```javascript
alert 창엔 1, undefined가 차례대로 출력
```
- &&는 왼쪽 피연산자를 평가하고(이때 1이 얼럿창에 출력됩니다) 평가를 즉시 멈춤.
- alert(1)의 평가 결과는 undefined로 거짓값이기 때문.
- && 연산자는 거짓값을 만나면 그 값을 출력하고 즉시 연산을 stop!!

#### Q5. OR AND OR 연산자로 구성된 표현식
```javascript
alert 창엔 3이 출력
```
- &&의 우선순위는 ||보다 높습니다. 따라서 &&가 먼저 실행됩니다.
- 2 && 3 = 3 이므로 3이 출력
- Q. 2&& 3 = 3 ? 어떤 식으로 이게 출력되는가.

#### Q6. 사이범위 확인하기
```javascript
let age;
if(age >=14 && age<=90)
```

#### Q7. 바깥 범위 확인하기
```javascript
 NOT ! 연산자를 사용한 답안
let age;
if(!(age >=14 && age<=90))
```
```javascript
 NOT ! 연산자를 사용하지 않은 답안
let age;
if(age <14 || age>90)
```
#### Q8. if에 관한 고찰 
```javascript
첫 번째 표현식과 세 번째 표현식에 있는 alert가 실행
```
#### Q9. 로그인 구현하기 
```javascript
let user = prompt('사용자를 입력해주세요.');
if(user == "Admin"){
    let password = prompt('비밀번호는 무엇일까요.');

    if(password == 'TheMaster'){
        alert('환영합니다.');
    }
    else if(password == '' || passwor == null){
        alert('취소되었습니다.');
    }
    else{
        alert('인증에 실패했습니다.');
    }
}
else if(user == ''||user == null){
    alert("취소 되었습니다.");
}   
else{
    alert("인증에 실패했습니다.");
}
```

### while과 for 반복문
#### Q1. 반복문의 마지막 값.
```javascript
1
```
이유 : 반복문이 끝날때마다 하나씩 감소 한다. (후위연산자이기에)
#### Q2. while 반복문의 출력값 예상하기.
```javascript
1. 1,2,3,4 출력
2. 1,2,3,4,5 출력 
즉 서로 다른 값이 출력된다.
```
#### Q3. 'for'반복문의 출력값 예상하기.
```javascript
두 경우 모두 0~4까지 출력
```
#### Q4. for 반복문을 이용하여 짝수 출력
```javascript
for(let i = 2; i<=10 ; i++){
    if(i%2 == 0){
        alert(i);
    }
}
```

#### Q5. for 반복문을 while 반복문으로 바꾸기
```javascript
let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}
```
#### Q6. 사용자가 유효한 값을 입력할때까지 프롬프트창 띄우기
```javascript
let num;

do {
  num = prompt("100을 초과하는 숫자를 입력해주세요.", 0);
} while (num <= 100 && num);
```
#### Q7. 소수 출력하기.
```javascript

```
