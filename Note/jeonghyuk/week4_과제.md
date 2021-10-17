function solution(n)
{
    var answer = 0;
    var m=String(n);
​
    for(var i=0; i<m.length; i++){
        answer+=parseInt(m[i]);
    }
    return answer;
}


 function solution(num) {
  let collatz = 0;
  if(num === 1) {
    return 0;
  }
  for(let i = 0; i <= 500; i ++) {
    if(collatz !== 1) {  
      collatz = (num % 2 === 0 ? num = num / 2 : num = num * 3 + 1) ;
    } else if(collatz === 1) {
      return i;
    };
  };
  return -1;
};

프로그래머스 문제민 먼저 했습니다...
