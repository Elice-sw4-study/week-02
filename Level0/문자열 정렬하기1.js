//[level 0] 문자열 정렬하기 (1) 120850
//https://school.programmers.co.kr/learn/courses/30/lessons/120850

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(my_string) { 
    var chk = my_string.replace(/[a-z]/gi, "");
    var arr = chk.split('').map(Number);
    
    var answer = arr.sort()
    
    return answer;
}