//[level 0] 합성수 찾기
//https://school.programmers.co.kr/learn/courses/30/lessons/120819

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(n) {
    var answer = 0;
    var cnt;
    
    for(let i = 4; i <= n; i++) {
        cnt = 1;
        for(let j = 2; j <= i; j++) {
            if (i % j == 0)
                cnt ++;
        }
        
        if (cnt >= 3) answer ++;
    }
    
    return answer;
}