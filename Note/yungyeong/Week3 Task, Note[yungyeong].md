### 4.1
#### “객체야 안녕?”
```javascript
  let user = {};
  user.name="John";
  user.surname="Smith";
  user.name="Pete";
  delet user.name;
```
#### “객체가 비어있는지 확인하기”
```javascript
let schedule ={};
alert(isEmpty(schedule));
schedule["8:30"]="get up";
alert(isEmpty(schedule));
function isEmpty(obj){
  for(let key in obj){
    return false;
  }
  return true;
```

#### “변하지 않는 객체?”
```
에러없이 실행되고 const로 선언된 객체는 수정할 수 있다. 
const는 user의 값을 고정하지만, 그 값의 내용을 고정하지 않는다.
```

#### “프로퍼티 합계 구하기”
```javascript
let salaries = {
    John:100,
    Ann:160,
    Pete:130
};
let sum = 0;
for(let key in salaries ){
    sum+=salaries[key];
}
alert(sum);
```
#### “프로퍼티 값 두 배로 부풀리기
```javascript
function multiplyNumeric(obj){
  for(let key in obj){
  if(typeof obj[key] == 'num'){
    obj[key] *=2;
```

