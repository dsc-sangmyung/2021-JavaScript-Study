function solution(n) {
    let answer = 0;
    
    for(let i=1; i<=Math.sqrt(n);i++) {
        if(n%i==0) {
            answer += parseInt(n/i);
            answer += i;
            if(i*i==n) answer-=i;
        }
    }
    
    return answer;
}