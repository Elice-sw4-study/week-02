//[level 0] 문자열안에 문자열 120908
//https://school.programmers.co.kr/learn/courses/30/lessons/120908

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(str1, str2) {
    if (str1.includes(str2))
        return 1;
    else
        return 2;
}