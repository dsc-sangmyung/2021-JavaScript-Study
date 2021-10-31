// function that checks if the input is a prime number
function isPrime(num) {
    if (num === 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
        return false;
        }
    }
    return true;
}

// function that checks if the sum of three values of array is prime number
function isPrimeSum(arr) {
    let answer = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            for (let k = j+1; k < arr.length; k++) {
                if (isPrime(arr[i] + arr[j] + arr[k])) {
                    answer += 1;
                }
            }
        }
    }
    return answer;
}


function solution(nums) {
    return isPrimeSum(nums);
}