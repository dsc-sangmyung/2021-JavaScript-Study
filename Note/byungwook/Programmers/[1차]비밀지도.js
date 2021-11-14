function solution(n, arr1, arr2) {
    let answer = [];
    let temp = '';
    
    arr1.forEach( (x, i) => {
        arr1[i] = x.toString(2).padStart(n, '0');
    });
    
    arr2.forEach( (x, i) => {
        arr2[i] = x.toString(2).padStart(n, '0');
    });
    
    for (let i = 0; i < n; i++) {
        temp = '';
        for (let j = 0; j < n; j++) {
            if (arr1[i][j] == '1' || arr2[i][j] == '1') temp += '#';
            else temp += ' ';
        }
        answer.push(temp);
    }
    
    return answer;
}