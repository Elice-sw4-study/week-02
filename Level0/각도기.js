//[level 0] 각도기 120829
//https://school.programmers.co.kr/learn/courses/30/lessons/120829

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(angle) {
    if (angle < 90)
        return 1;
    else if (angle == 90)
        return 2;
    else if (angle < 180)
        return 3;
    else if (angle == 180)
        return 4;
}