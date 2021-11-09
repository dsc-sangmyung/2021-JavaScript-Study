function solution(n) {
    var answer = 0;
    
    for(let i = 1; i <= n; i++){
        if(n%i == 0){
            answer += i;
        }
    }
    return answer;
}

function solution(s, n) {
    let capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let little = 'abcdefghijklmnopqrstuvwxyz'
    var answer = '';
    
    for(let i = 0; i < s.length; i++){
        let text = s[i];
        if(text == ' '){
            answer += ' ';
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text) + n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}
