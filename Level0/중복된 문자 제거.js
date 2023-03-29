//[level 0] 중복된 문자 제거 120888
//https://school.programmers.co.kr/learn/courses/30/lessons/120888

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(my_string) {
    var answer = '';
    var chk = [];
    
    for (s of my_string) {
        if (!(chk.includes(s)))
            chk.push(s);
    }
    
    answer = chk.join('');
    
    return answer;
}