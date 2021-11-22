```javascript
function solution(array, commands) {
  let answer = [];
  commands.forEach((command) => {
    let arr = array.slice(command[0] - 1, command[1]).sort(function (a, b) {
      return a - b;
    });
    answer.push(arr[command[2] - 1]);
  });

  return answer;
}
```
