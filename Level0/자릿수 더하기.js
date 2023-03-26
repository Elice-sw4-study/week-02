//[level 0] 자릿수 더하기 120906
//https://school.programmers.co.kr/learn/courses/30/lessons/120906

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(n) {
    var sum = 0;
    
    while (n / 10 > 0) {
        sum += n % 10;
        n = parseInt(n / 10);
    }
    sum += n;
    
    return sum;
}