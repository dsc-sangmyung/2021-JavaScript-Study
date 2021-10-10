#### 4.1
##### “객체야 안녕?”
```javascript
  let user = {};
  user.name="John";
  user.surname="Smith";
  user.name="Pete";
  delet user.name;
```
##### “객체가 비어있는지 확인하기”
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
