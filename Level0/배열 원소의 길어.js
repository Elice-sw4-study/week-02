//[level 0] 배열 원소의 길어 120854
//https://school.programmers.co.kr/learn/courses/30/lessons/120854

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(strlist) {
    var answer = [];
    
    for (let i of strlist) {
        answer.push(i.length);
    }
    
    return answer;
}