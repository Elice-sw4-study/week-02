//[level 0] 가위 바위 보 120839
//https://school.programmers.co.kr/learn/courses/30/lessons/120839

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(rsp) {
    var answer = '';
    
    for (s of rsp) {
        if (s === '0')
            answer += '5';
        else if (s === '2')
            answer += '0';
        else //s === '5'
            answer += '2';
    }
    
    return answer;
}