//[level 0] 문자열 뒤집기 120822
//https://school.programmers.co.kr/learn/courses/30/lessons/120822

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(my_string) {
    var answer = my_string.split('').reverse().join('');
    
    return answer;
}