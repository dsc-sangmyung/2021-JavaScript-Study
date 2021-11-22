function solution(N, stages) {
    let player = [];
    let answer = [];
    
    for (let i = 0; i < N+2; i ++) {
        answer.push(0);
        player.push(0);
    }
    
    stages.forEach(s => {
        player[+s] += 1;
    });
    
    let s = player[N+1];
    
    for (let i = N; i > 0; i--) {
        answer[i] = [1 - (s  / (s + player[i])), i];
        s += player[i];
    }
    answer = answer.slice(1, -1).sort((a, b) => {
        if (a[0] == b[0]) return a[1] - b[1];
        return b[0] - a[0];
    });
    
    return answer.map(a => a[1]);
}