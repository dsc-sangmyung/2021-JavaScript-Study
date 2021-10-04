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
### 화살표 함수 기본
