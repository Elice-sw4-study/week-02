//[level 0] 피자 나눠 먹기 (3) 120816
//https://school.programmers.co.kr/learn/courses/30/lessons/120816

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(slice, n) {
    if (slice >= n)
        return 1;
    else {
        if (n % slice == 0)
            return parseInt(n / slice);
        else
            return parseInt(n / slice) + 1;
    }
}