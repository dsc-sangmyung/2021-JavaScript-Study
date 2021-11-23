//k번째 수
function solution(array, commands) {
    var answer = [];
    let j = 0;
    let i = 0;
    let k = 0;
    
    for(let m = 0; m < commands.length; m++){
        i = commands[m][0]
        j = commands[m][1]
        k = commands[m][2]
        
        let sliced = array.slice(i-1, j)
        let sorted = sliced.sort((a,b)=> a - b)
        
        answer.push(sorted[k-1])
    }
    return answer;
}

//실패율 객체사용
function solution(N, stages){
  var answer = [];
  for( let i=1; i<=N; i++ ){
    let top = stages.filter(el=>(el===i)).length;
    let bottom =  stages.filter(el=>(el>=i)).length;

    if(bottom === 0){
          answer.push({stageNumber:i, failRate: 0 });
    }else{
        answer.push({stageNumber:i, failRate: top / bottom });
    }
  }

  return answer.sort((a,b)=>(b.failRate === a.failRate) ? a.stageNumber -b.stageNumber : b.failRate - a.failRate).map(el=>el.stageNumber);
}
