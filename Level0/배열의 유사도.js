//[level 0] 배열의 유사도 120903
//https://school.programmers.co.kr/learn/courses/30/lessons/120903

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(s1, s2) {
    var cnt = 0;
    
    for(let i of s1) {
        for(let j of s2) {
            if (i === j)
                cnt ++;
        }
    }
    
    return cnt;
}