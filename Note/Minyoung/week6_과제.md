# JS Study week6 과제

## 5.3 문자열

**5.3.1 첫 글자를 대문자로 변경하기**

```javascript
function ucFirst(str) {
  return str[0].toUpperCase() + str.substring(1);
}
```

**5.3.2 스팸 문자열 걸러내기**

```javascript
function checkSpam(str) {
  let lowstr = str.toLowerCase();
  return lowstr.includes('viagra') || lowstr.includes('xxx');
}
```

**5.3.3 문자열 줄이기**

```javascript
function truncate(str, maxlength) {
  if(str.length <= maxlength) return str;
  else return str.substring(0, maxlength-1) + "...";
}
```

**5.3.4 숫자만 추출하기**

```javascript
function extractCurrencyValue(str) {
  return Number(str.substring(1));
}
```


## 5.4 배열

**5.4.1 배열은 복사가 될까요?**

- `4`가 출력된다.
- 배열은 객체이기 때문에 `shoppingCart`와 `fruits`는 모두 같은 배열을 참조한다.

**5.4.2 배열과 관련된 연산**

```javascript
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[parseInt((styles.length-1)/2)] = "Classics";
console.log(style.shift());
styles.unshift("Rap", "Reggae");
```

**5.4.3 배열 컨텍스트에서 함수 호출하기**

- arr 배열이 출력된다.
- arr[2]에 함수가 추가되고 호출되어 arr 배열을 참조하는 this로 인해 배열을 출력한다.

**5.4.4 입력한 숫자의 합 구하기**

- 해답에는 `===` 쓰던데 왜 그거 쓰는지 모르겠음...

```javascript
function sumImput() {
  let inputs = [];
  while(true) {
    let num = prompt("숫자 입력", 0);
    if(num == '' || num == null || !isFinite(num)) break;
    inputs.push(Number(num));
  }
  let sum = 0;
  for(let i=0; i<inputs.length; i++){
    sum += input[i];
  }
  return sum;
}
```

**5.4.5 최대합 부분 배열**

```javascript
function getMaxSubSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let start = 0;
    for (let j = i; j < arr.length; j++) {
      start += arr[j];
      sum = Math.max(sum, start);
    }
  }
  
  return sum;
}
```


## 5.5 배열과 메서드

**5.5.1 border-left-width를 borderLeftWidth로 변경하기**

```javascript

```

**5.5.2 특정 범위에 속하는 요소 찾기**

```javascript
function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}
```

**5.5.3 특정 범위에 속하는 요소 찾기(배열 변경하기)**

```javascript
function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
```

**5.5.4 내림차순으로 정렬하기**

```javascript
arr.sort( (a, b) => b - a );
```

**5.5.5 배열 복사본을 정렬하기**

```javascript
function copySorted(arr) {
  return arr.slice().sort();
}
```

**5.5.6 확장 가능한 계산기**

**5.5.7 이름 매핑하기**

```javascript
let names = users.map(item => item.name);
```

**5.5.8 객체 매핑하기**

```javascript
let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
```

**5.5.9 나이를 기준으로 객체 정렬하기**

```javascript
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}
```

**5.5.10 배열 요소 무작위로 섞기**

```javascript

```

**5.5.11 평균 나이 구하기**

```javascript
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
```

**5.5.12 중복 없는 요소 찾아내기**

```javascript

```

**5.5.13 Create keyed object from array**

```javascript

```

## 6.8 setTimeout과 setInterval을 이용한 호출 스케줄링
**6.8.1 일초 간격으로 숫자 출력하기**

```javascript
// setInterval
function printNumbers(from, to) {
  let time = setInterval(function() {
    console.log(from);
    if (from == to) {
      clearInterval(from);
    }
    from++;
  }, 1000);
}

// setTimeout
function printNumbers(from, to) {
  setTimeout(function start() {
    console.log(from);
    if (from < to) {
      setTimeout(start, 1000);
    }
    from++;
  }, 1000);
}
```

**6.8.2 setTimeout 은 무엇을 보여줄까요?**

- 반복문 실행 후에 setTimeout에 넘겨준 함수가 실행된다.
- 얼럿 창에는 `100000000`이 출력된다.
