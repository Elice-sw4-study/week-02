//[level 0] 짝수는 싫어요 120813
//https://school.programmers.co.kr/learn/courses/30/lessons/120813

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(n) {
    var answer = [];
    
    for (let i = 1; i <= n; i+=2)
        answer.push(i);
    
    return answer;
}