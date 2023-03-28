//[level 0] 팩토리얼 120848
//https://school.programmers.co.kr/learn/courses/30/lessons/120848

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(n) {
    var answer = [1];
    var chk = 1
    
    for (let i = 2; i <= 10; i++) {
        chk *= i;
        answer.push(chk);
    }
    
    answer.sort(function(a, b) { //내림차순 정렬
        return b - a;
    })
    
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] <= n)
            return answer.length - i;
    }
}