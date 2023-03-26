//[level 0] 특정 문자 제거하기 120826
//https://school.programmers.co.kr/learn/courses/30/lessons/120826

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(my_string, letter) {
    let answer = "";
    for(let i = 0; i < my_string.length; i++) {
        if (my_string[i] !== letter) {
            answer += my_string[i];
        }
    }
    
    return answer;
}