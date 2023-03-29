//[level 0] 머쓱이보다 키 큰 사람 120585
//https://school.programmers.co.kr/learn/courses/30/lessons/120585

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(array, height) {
    let cnt = 0;
    
    for (let i of array) {
        if (i > height)
            cnt += 1;
    }
    
    return cnt;
}