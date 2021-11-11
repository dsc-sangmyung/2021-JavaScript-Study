### 5.3
#### 첫 글자를 대문자로 변경하기
```javascript 
function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}
alert( ucFirst("john") );
```

#### 스팸 문자열 걸러내기
```javascript
function checkSpam(str) {
  return str.includes('viagra') || str.includes('xxx');
}
```

#### 문자열 줄이기
```javascript
function truncate(str ,maxlength) {
  return (str.length > maxlength) ?
  str.slice(0, maxlength - 1)+ '...' : str;
}
```

#### 숫자만 추출하기
```javascript
function extractCurrencyValue(str){
  return str.slice(1);
}
alert (extractCurrencyValue('$120'))
```

### 5.4
#### 배열은 복사가 될까요
```
4 출력
```

#### 배열과 관련된 연산
```javascript
```

#### 배열 컨텍스트에서 함수 호출하기
```
배열을 출력
```

#### 입력한 숫자의 합 구하기
```javascript
function sumImput(){
  let input = [];
  while(true) {
  let value = +prompt("숫자를 입력하세요");
  if(value == "" || value == null) break;
  input.push(value);
}
  let sum = 0;
  for (let i of input){
  sum+=i;
  }
  return sum;
  }
  alert(sumImput());
```

### 5.5
#### border-left-width 를 borderLeftWidth로 변경하기
```javascript

```

#### 특정 범위에 속하는 요소찾기
```javascript
function filterRange(arr, a, b) {
return arr.filter(item => (a <= item && item <= b));
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); 
alert( arr );
```

#### 특정 범위에 속하는 요소찾기
```javascript
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); 
alert( arr );
```

#### 내림차순으로 정렬하기
```javascript
arr.sort((a, b) => b - a);
```

#### 배열 복사본을 정렬하기
```javascript
function copySorted(arr) {
  return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted );
alert( arr );
```
#### 이름 매핑하기
```javascript
let names = users.map(item => item.name);
```

#### 일초 간격으로 숫자 출력하기
```javascript
setTimeout(function time() {
    if (current < to) {
      setTimeout(time, 1000);   //1000밀리초 = 1초
    }
    current++;
  }, 1000);
}
```

#### setTimeout은 무엇을 보여줄까요?
```
setTimeout은 현재 코드 실행이 종료되었을 때 실행된다. 그러므로 100000000이 출력된다.
```
