//[level 0] 아이스 아메리카노 120819
//https://school.programmers.co.kr/learn/courses/30/lessons/120819

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(money) {
    var n = parseInt(money / 5500);
    var answer = [n, money - 5500 * n];
    
    return answer;
}