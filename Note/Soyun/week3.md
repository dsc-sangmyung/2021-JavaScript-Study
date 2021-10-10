## 3주차 과제
### 객체
#### Q1. 객체야 안녕?
```javascript
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
```
#### Q2. 객체가 비어있는지 확인하기
```javascript
 function isEmpty(obj) {
    for (let key in obj) {
      // if the loop has started, there is a property
      return false;
    }
    return true;
  }
```
#### Q3. 변하지 않는 객체
```javascript
가능하다.
```

#### Q4. 프로퍼티 합계 구하기
```javascript
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) { //질문 for문 안에 let in
  sum += salaries[key];
}

alert(sum); // 390
```
#### Q5. 프로퍼티 값 두 배로 부풀리기
```javascript
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

```

###  메서드와 this
#### Q1. 객체 리터럴에서 'this' 사용하기
```javascript
에러 발생
이유 : this 설정시 객체가 정의 되지않기 때문이다.
```
#### Q2. 계산기 만들기
```javascript
let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('첫 번째 값:');
    this.b = +prompt('두 번째 값:');
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
```
#### Q3. 체이닝
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
  showStep() {
    alert( this.step );
    return this;
  }
}

ladder.up().up().down().up().down().showStep();
```
### 변수의 유효범위와 클로저
#### Q1. Does a function pickup latest changes?
```javascript
Pete
```

#### Q2. Which variables are available?
```javascript
Pete
```

#### Q3. counter는 독립적일까요?
```javascript
0과 1 출력
```

####  Q4. counter 객체
```javascript
동작 잘함
```

#### Q5. if 문 안의 함수
```javascript
sayHi는 if문안에서만 작성했기에 if문안에서만 접근할 수 있다.
=> 오류 발생
```
