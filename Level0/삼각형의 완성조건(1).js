//[level 0] 삼각형의 완성조건 (1) 120889
//https://school.programmers.co.kr/learn/courses/30/lessons/120889

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(sides) {
    sides.sort()
    
    if (sides[2] < sides[0] + sides[1])
        return 1;
    else
        return 2;
}