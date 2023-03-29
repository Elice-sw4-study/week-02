//[level 0] 피자 나눠 먹기 (1) 120814
//https://school.programmers.co.kr/learn/courses/30/lessons/120814

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(n) {
    if (n % 7 == 0)
        return parseInt(n / 7);
    else
        return parseInt(n / 7) + 1;
}