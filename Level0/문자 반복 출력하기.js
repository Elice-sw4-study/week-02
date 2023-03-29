//[level 0] 문자 반복 출력하기 120825
//https://school.programmers.co.kr/learn/courses/30/lessons/120825

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(my_string, n) {
    var answer = '';
    
    for (let i = 0; i < my_string.length; i++) {
        for (let j = 0; j < n; j++) {
            answer += my_string[i]
        }
    }
    
    return answer;
}