//[level 0] 배열 두 배 만들기 120809
//https://school.programmers.co.kr/learn/courses/30/lessons/120809

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(numbers) {
    var answer = [];
    
    for (let i of numbers) {
        answer.push(i * 2);
    }
    
    return answer;
}