//[level 0] 숫자 찾기 120904
//https://school.programmers.co.kr/learn/courses/30/lessons/120904

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(num, k) {
    var chk = num.toString();
    var answer =chk.indexOf(k);
    
    if (answer !== -1)
        return answer + 1;
    else
        return answer
}