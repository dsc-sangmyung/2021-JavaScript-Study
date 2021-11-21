function solution(N, stages) {
    let answer = [];
    let f_rate = [];

    stages.sort((a,b)=>a-b);
    for(let i=1; i<=N; i++) {
        let failure = 0;
        while(stages[0]==i) {
            stages.shift();
            failure++;
        }
        f_rate.push([failure/stages.length, i]);
    }

    f_rate.sort((a,b)=>b[0]-a[0]);
    for(let i=0; i<N; i++) {
        answer.push(f_rate[i][1]);
    }

    return answer;
}