```javascript
function solution(n, arr1, arr2) {
    var answer = [];
    for(let i = 0;i<n;i++){
        answer[i] = (arr1[i] | arr2[i]).toString(2);
        while(answer[i].length < n) 
            answer[i] = '0'+answer[i];
        answer[i] = answer[i].toString().replace(/1/g,'#').replace(/0/g,' ');
    }
    return answer;
}
```
