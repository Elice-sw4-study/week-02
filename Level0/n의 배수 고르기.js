//[level 0] n의 배수 고르기 120905
//https://school.programmers.co.kr/learn/courses/30/lessons/120905

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(n, numlist) {
    var answer = [];
    
    for (let num of numlist) {
        if (num % n == 0)
            answer.push(num);
    }
    return answer;
}