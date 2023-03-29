//[level 0] 약수 구하기 120897
//https://school.programmers.co.kr/learn/courses/30/lessons/120897

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(n) {
    var answer = [];
    
    for (let i = 1; i <= n; i++){
        if(n % i == 0)
            answer.push(i);
    }
    
    return answer;
}