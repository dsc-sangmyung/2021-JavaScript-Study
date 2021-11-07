function isDevided(num, dv) {
    if (num % dv == 0) return true;
    
    return false
}

function solution(n) {
    let answer = 0;
    
    for (let i = 1; i <= n/2; i++) {
        if (isDevided(n, i)) answer += i;
    }
    
    answer += n;
    return answer;
}