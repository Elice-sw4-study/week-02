//[level 0] A로 B 만들기 120886
//https://school.programmers.co.kr/learn/courses/30/lessons/120886

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(before, after) {
    var beforearr = before.split('').sort().join('');
    var afterarr = after.split('').sort().join('');
    
    return beforearr === afterarr ? 1 : 0
}