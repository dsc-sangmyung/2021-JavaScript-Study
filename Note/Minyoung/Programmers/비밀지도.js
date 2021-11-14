function solution(n, arr1, arr2) {
    let answer = [];
    let bin1 = [];
    let bin2 = [];
    
    // 이진수 변환
    for(let i=0; i<n; i++) {
        bin1.push(arr1[i].toString(2).padStart(n, '0'));
        bin2.push(arr2[i].toString(2).padStart(n, '0'));
    }
    
    // 각 문자 비교
    for(let i=0; i<n; i++) {
        let arr = [];
        for(let j=0; j<n; j++) {
            (bin1[i][j]=='0' && bin2[i][j]=='0') ? arr.push(' ') : arr.push('#')
        }
        answer.push(arr.join(''));
    }
    
    return answer;
}