## 4주차 과제
### 변수의 유효범위와 클로저
#### Q1. 클로저를 이용하여 합 구하기
```javascript
function sum(a) {

  return function(b) {
    return a + b; 
  };

}

alert( sum(1)(2) ); 
alert( sum(5)(-1) ); 
```
#### Q2. Is variable visible?
```javascript
에러발생
```

#### Q3. 함수를 이용해 원하는 값만 걸러내기
```javascript
1. filter in between
function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inBetween(3, 6)) );

2. filter in array
function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inArray([1, 2, 10])) ); 
```

#### Q4. 필드를 기준으로 정렬하기
```javascript
function byField(fieldName){
  return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}
```
#### Q5. 함수를 사용해 군대 만들기
```javascript
