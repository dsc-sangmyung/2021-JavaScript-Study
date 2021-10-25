function solution(arr) {
    let answer = [];
    
    answer.push(arr.shift());
    arr.forEach((x) => {
        if (x != answer[answer.length - 1]) answer.push(x);
    })
    
    return answer;
}