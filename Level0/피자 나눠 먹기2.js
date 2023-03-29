//[level 0] 피자 나눠 먹기 (2) 120815
//https://school.programmers.co.kr/learn/courses/30/lessons/120815

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(n) {
    for (let i = 1; i <= 100; i++) {
        if((6 * i) % n == 0)
            return i;
    }
}