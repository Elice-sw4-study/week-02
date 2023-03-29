//[level 0] 암호 해독 120892
//https://school.programmers.co.kr/learn/courses/30/lessons/120892

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(cipher, code) {
    var answer = '';
    
    for (let i = code - 1; i < cipher.length; i += code) {
        answer += cipher[i];
    }
    
    return answer;
}