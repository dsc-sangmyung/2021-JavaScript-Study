function solution(array, commands) {
    let answer = [];
    
    for(let c = 0; c < commands.length; c++) {
        let i = commands[c][0];
        let j = commands[c][1];
        let k = commands[c][2];
        
        answer.push(array.slice(i-1,j).sort((a,b)=>a-b)[k-1]);
    }
    
    return answer;
}