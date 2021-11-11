### “클로저를 이용하여 합 구하기”
```javascript
function sum(a){
return function(b) {
return a + b; 
};}
alert( sum(1)(2) );
alert( sum(5)(-1) );
```

### “Is variable visible?”
```javascript
에러가 발생한다.
X가 초기화되지않았기때문이다.
```

### 함수이용해 원하는 값만 걸러내기
```javascript
function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };}
let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inBetween(3, 6)) );
function inArray(arr){
return function(x){
  return // 내장함수공부필요,,
};}
let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inArray([1, 2, 10])) );
```

### 필드를 기준으로 정렬하기
```javascript
function byField(fieldName){
  return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}
```
### 함수를 사용해 군대만들기
```javascript
function makeArmy() {
    let shooters = []; 
    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function() {
            console.log(j);
        };
        shooters.push(shooter);
        i ++;
    }
    return shooters;
}
let army = makeArmy();
army[0](); 
army[5](); 
```

© 2021 GitHub, Inc.
Terms
Privacy
Sec
