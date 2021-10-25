function solution(arr) {
    let min = arr[0];
    
    arr.forEach((x) => {
        if (x < min) min = x;
    });
    
    let ind = arr.indexOf(min);
    arr.splice(ind, 1);
    
    if (arr.length == 0) arr = [-1];
    
    return arr;
}