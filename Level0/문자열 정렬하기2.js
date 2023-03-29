//[level 0] 문자열 정렬하기 (2) 120911
//https://school.programmers.co.kr/learn/courses/30/lessons/120911

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(my_string) {
    var answer = '';
    
    for (s of my_string)
        answer += s.toLowerCase();
    
    var result = [...answer];
    result = result.sort().join('');
    
    return result;
}