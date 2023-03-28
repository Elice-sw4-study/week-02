//[level 0] 순서쌍의 개수 120836
//https://school.programmers.co.kr/learn/courses/30/lessons/120836

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(n) {
    var cnt = 0;
    
    for (let i = n; i > 0; i--) {
        if (n % i == 0)
            cnt ++;
    }
    
    return cnt;
}