//[level 0] 짝수의 합 120831
//https://school.programmers.co.kr/learn/courses/30/lessons/120831

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(n) {
    var sum = 0
    for (var i = 2; i <= n; i+=2) {
        sum += i
    }
    
    return sum;
}