//[level 0] 개미 군단 120837
//https://school.programmers.co.kr/learn/courses/30/lessons/120837

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(hp) {
    var ant1 = parseInt(hp / 5);
    hp %=  5;
    var ant2 = parseInt(hp / 3);
    hp %=  3;
    var ant3 = hp
    
    return ant1 + ant2 + ant3;
}