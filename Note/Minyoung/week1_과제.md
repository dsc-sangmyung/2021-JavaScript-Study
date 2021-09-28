# JS Study week1 과제

## 2.1 Hello, world!

### 2.1.1 alert 창 띄우기
```html
<!DOCTYPE html>
<html>
<body>
  <script>
    alert("자바스크립트!!");
  </script>
</body>
</html>
```

### 2.1.2 외부 스크립트를 이용해 alert 창 띄우기
- HTML
```html
<!DOCTYPE html>
<html>
<body>
  <script src = "alert.js"></script>
</body>
</html>
```

- JS
```javascript
alert("자바스크립트!!");
```


## 2.4 변수와 상수

### 2.4.1 변수 가지고 놀기
```javascript
let admin, name;  // 1
name = "John";    // 2
admin = name;     // 3
alert(admin);     // 4
```

### 2.4.2 올바른 이름 선택하기
1. 현재 우리가 살고있는 행성(planet)의 이름을 값으로 가진 변수를 만들어보세요. 변수 이름은 어떻게 지어야 할까요?
  - `earth`
2. 웹사이트를 개발 중이라고 가정하고, 현재 접속 중인 사용자(user)의 이름(name)을 저장하는 변수를 만들어보세요.<br/>변수 이름은 어떻게 지어야 할까요?
  - `currentUserName`

### 2.4.3 대문자 상수 올바로 사용하기
1. `birthday`를 대문자 상수로 바꾸는 것이 적절할까요?
  - `birthday`는 실행 전에 이미 값을 알고, 코드에서 그 값을 직접적으로 사용하기 때문에 대문자 상수로 적합하다
2. `age` 역시 대문자 상수로 바꾸는 것이 괜찮은 선택일까요?
  - `age`는 값이 변할 가능성이 존재하고, `birthday`로부터 값을 가져와 사용하기 때문에 대문자 상수로 적합하지 않다.


## 2.5 자료형

### 2.5.1 문자열 따옴표
```javascript
let name = "Ilya";
alert( `hello ${1}` );      // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` );   // hello Ilya
```


## 2.6 alert, prompt, confirm을 이용한 상호작용

### 2.6.1 간단한 페이지 만들기
```html
<!DOCTYPE html>
<html>
<body>
  <script>
    let userName = prompt("이름을 입력해주세요", '');
    alert(userName);
  </script>
</body>
</html>
```


## 2.8 기본 연산자와 수학

### 2.8.1 전위형과 후위형
- `a` = 2
- `b` = 2
- `c` = 2
- `d` = 1

### 2.8.2 할당 후 결과 예측하기
- `a` = 4
- `x` = 5

### 2.8.3 형 변환
```javascript
"" + 1 + 0      // "10"
"" - 1 + 0      // -1
true + false    // 1
6 / "3"         // 2
"2" * "3"       // 6
4 + 5 + "px"    // "9px"
"$" + 4 + 5     // "$45"
"4" - 2         // 2
"4px" - 2       // NaN
7 / 0           // Infinity
"  -9  " + 5    // "  -9  5"
"  -9  " - 5    // -14
null + 1        // 1
undefined + 1   // NaN
" \t \n" - 2    // -2
```

### 2.8.4 덧셈 고치기
```javascript
let a = prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
let b = prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);
alert(+a + +b); // 3
```


## 2.9 비교 연산자

### 2.9.1 비교
```javascript
5 > 4                   // true
"apple" > "pineapple"   // false
"2" > "12"              // true
undefined == null       // true
undefined === null      // false
null == "\n0\n"         // false
null === +"\n0\n".      // false
```


## 2.10 if와 '?'를 사용한 조건 처리

### 2.10.1 if와 문자열 0
```javascript
if ("0") {
  alert( 'Hello' );
}
```
- 실행된다

### 2.10.2 자바스크립트의 공식 이름
```javascript
let input = prompt("자바스크립트의 ‘공식’ 이름은 무엇일까요?", '');
if(input == 'ECMAScript') alert('정답입니다!');
else alert('모르셨나요? 정답은 ECMAScript입니다!');
```

### 2.10.3 입력받은 숫자의 부호 표시하기
```javascript
let input = prompt("숫자를 입력하세요", 0);
if(input > 0') alert(1);
else if(input < 0') alert(-1);
else alert(0);
```

### 2.10.4 'if'를 '?'로 교체하기
```javascript
let result = (a + b < 4)? '미만': '이상';  
}
```

### 2.10.5 'if..else'를 '?'로 교체하기
```javascript
let message = (login == '직원')? '안녕하세요.': 
              (login == '임원')? '환영합니다.': 
              (login == '')? '로그인이 필요합니다.': 
              '';
```


## 2.11 논리 연산자

### 2.11.1 다음 OR 연산의 결과는 무엇일까요?
```javascript
alert( null || 2 || undefined );
```
- `2`가 출력된다.

### 2.11.2 OR 연산자의 피연산자가 alert라면?
```javascript
alert( alert(1) || 2 || alert(3) );
```
- `1`, `2`가 출력된다.

### 2.11.3 다음 AND 연산의 결과는 무엇일까요?
```javascript
alert( 1 && null && 2 );
```
- `null`이 출력된다.

### 2.11.4 AND 연산자의 피연산자가 alert라면?
```javascript
alert( alert(1) && alert(2) );
```
- `1`, `undefined`가 출력된다.

### 2.11.5 OR AND OR 연산자로 구성된 표현식
```javascript
alert( null || 2 && 3 || 4 );
```
- `3`이 출력된다.

### 2.11.6 사이 범위 확인하기
```javascript
if(age >= 14 && age <= 90)
```

### 2.11.7 바깥 범위 확인하기
```javascript
if(!(age >= 14 && age <= 90))   // NOT 연산자 사용
if(age < 14 || age > 90)
```

### 2.11.8 'if'에 관한 고찰
```javascript
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
```
- `alert('first')`와 `alert('third')`가 실행된다.

### 2.11.9 로그인 구현하기
```javascript
let userName = prompt("사용자 이름 입력",'');
if(userName == "Admin"){
  let userPW == prompt("비밀번호 입력",'');
  if(userPW == "TheMaster") alert("환영합니다!");
  else if(userPW == '' || userPW == null) alert("취소되었습니다.");
  else alert("인증에 실패하였습니다.");
}
else if(userName == '' || userName == null) alert("취소되었습니다.");
else alert("등록되지 않은 사용자입니다.");
```


## 2.13 while과 for 반복문

### 2.13.1 반복문의 마지막 값
```javascript
let i = 3;

while (i) {
  alert( i-- );
}
```
- 얼럿 창에 마지막으로 뜨는 값은 `1`이다.
- `i = 1`일 때 마지막으로 출력이 되고, `i = 0`이 되어 반복문이 멈춘다.

### 2.13.2 'while' 반복문의 출력값 예상하기
1. 전위형 증가 연산자를 사용한 경우(++i):
```javascript
let i = 0;
while (++i < 5) alert( i );
```
- `1`, `2`, `3`, `4`를 출력한다.

2. 후위형 증가 연산자를 사용한 경우(i++):
```javascript
let i = 0;
while (i++ < 5) alert( i );
```
- `1`, `2`, `3`, `4`, `5`를 출력한다.

### 2.13.3 'for' 반복문의 출력값 예상하기
1. 후위형 증가 연산자를 사용한 경우(i++):
```javascript
for (let i = 0; i < 5; i++) alert( i );
```
- `0`, `1`, `2`, `3`, `4`를 출력한다.

2. 전위형 증가 연산자를 사용한 경우(++i):
```javascript
for (let i = 0; i < 5; ++i) alert( i );
```
- `0`, `1`, `2`, `3`, `4`를 출력한다.

### 2.13.4 'for' 반복문을 이용하여 짝수 출력하기
```javascript
for (let i = 2; i <= 10; i++){
  if(i % 2 == 0) alert(i);
}
```

### 2.13.5 'for' 반복문을 'while' 반복문으로 바꾸기
```javascript
let i = 0;
while(i < 3) {
alert( `number ${i++}!` );
}
```

### 2.13.6 사용자가 유효한 값을 입력할 때까지 프롬프트 창 띄우기
```javascript
let num;
do {
  num = prompt("100을 초과하는 숫자 입력", 0);
} while (!(num > 100 || num == null || num == ''));
```

### 2.13.7 소수 출력하기
```javascript
let n = prompt("2~n까지의 소수 출력 - n 입력: );
label:
for(let i=2, i<=n; i++) {
  for(let j=2; j<i; j++){
    if(i%j == 0) continue label;
  }
  alert(i);
}
```


## 2.14 switch문

### 2.14.1 'switch'문을 'if'문으로 변환하기
```javascript
if(browser == 'Edge') alert( "Edge를 사용하고 계시네요!" );
else if(browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') alert( '저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
else alert( '현재 페이지가 괜찮아 보이길 바랍니다!' );
```

### 2.14.2 'if'문을 'switch'문으로 변환하기
```javascript
let a = +prompt('a?', '');
switch(a) {
  case 0:
    alert( 0 );
    break;
  case 1:
    alert( 0 );
    break;
  case 2:
  case 3:
    alert( '2,3' );
    break;
}
```
