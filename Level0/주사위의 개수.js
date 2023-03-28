//[level 0] 주사위의 개수 120845
//https://school.programmers.co.kr/learn/courses/30/lessons/120845

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(box, n) {
    var answer = 1;
    
    for(b of box)
        answer *= parseInt(b / n);
 
    return answer;
}