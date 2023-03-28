//[level 0] 대문자와 소문자 120893
//https://school.programmers.co.kr/learn/courses/30/lessons/120893

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(my_string) {
    var answer = "";
    for (s of my_string) {
        if (s.toLowerCase() === s)
            answer += s.toUpperCase();
        else
            answer += s.toLowerCase();
    }
    
    return answer;
}