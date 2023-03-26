//수타박수
function solution(input) {
    let answer =0
    for(let e of input){
        if(e==='아메리카노') answer+=4100
        else if(e==='카페라떼') answer+=4600
        else answer+=5100
    }

  return answer;
}