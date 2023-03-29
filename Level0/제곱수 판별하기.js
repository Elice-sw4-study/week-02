//[level 0] 제곱수 판별하기 120909
//https://school.programmers.co.kr/learn/courses/30/lessons/120909

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(n) {
    let sqrt = Math.sqrt(n);
    
    if (parseInt(sqrt) === sqrt)
        return 1;
    else
        return 2;
}