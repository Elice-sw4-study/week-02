//[level 0] 외계행성의 나이 120834
//https://school.programmers.co.kr/learn/courses/30/lessons/120834

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(age) {
    var answer = '';
    var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    var chk = age.toString();
    
    for (let a of chk) {
        answer += alpha[a];
    }
    return answer;
}