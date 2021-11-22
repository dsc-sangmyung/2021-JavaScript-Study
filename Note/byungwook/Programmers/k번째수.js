function solution(arr, commands) {
    let answer = [];
    
    commands.forEach(command => {
        let i = command[0];
        let j = command[1];
        let k = command[2];
        
        answer.push(arr.slice(i-1, j).sort((a, b) => a-b)[k-1]); 
    });
    return answer;
}