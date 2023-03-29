//[level 0] 숨어있는 숫자의 덧셈 (2) 120864
//https://school.programmers.co.kr/learn/courses/30/lessons/120864

//결과 
//정확성: 97.8
//합계: 97.8 / 100.0

function solution(my_string) {
    var chk = my_string.match(/[0-9]+/g); //정규식에서 + 역할?
    var answer = 0;

    for (n of chk) {
        answer += parseInt(n);
    }

    return answer;
}