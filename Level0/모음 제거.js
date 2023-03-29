//[level 0] 모음 제거 120849
//https://school.programmers.co.kr/learn/courses/30/lessons/120849

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(my_string) {

    return my_string.replace(/[aeiou]/g, "");
}