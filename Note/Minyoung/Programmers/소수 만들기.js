function solution(nums) {
    let result = 0;
    let count = 0;
    let sum = [];
    let len = nums.length
    
    // 3개를 골라 더한 수(배열)
    for(let i=0; i<len; i++) {
        for(let j=i+1; j<len; j++) {
            for(let k=j+1; k<len; k++) {
                sum[count] = nums[i] + nums[j] + nums[k];
                count++;
            }
        }
    }
    count = 0;
    
    // 소수 여부 판별
    for(let i=0; i<sum.length; i++) {
        for(let j=2; j<sum[i]; j++) {
            if(sum[i] % j == 0) {
                count = 1;
                break;
            }
        }
        if(count != 1) result++;
        count = 0;
    }
    
    return result;
}