//[level 0] 점의 위치 구하기 120841
//https://school.programmers.co.kr/learn/courses/30/lessons/120841

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(dot) {
    if (dot[0] > 0) {
        if (dot[1] > 0)
            return 1;
        else
            return 4;
    }
    else {
        if (dot[1] > 0)
            return 2;
        else
            return 3;
    }
}