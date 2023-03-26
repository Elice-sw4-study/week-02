//[level 0] 중복된 숫자 개수 120583
//https://school.programmers.co.kr/learn/courses/30/lessons/120583

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(array, n) {
    var cnt = 0;
    
    for(let i of array) {
        if (i === n)
            cnt += 1;;
    }
    
    return cnt;
}