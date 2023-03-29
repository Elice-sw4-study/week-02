//[level 0] 숨어있는 숫자의 덧셈 (1) 120851
//https://school.programmers.co.kr/learn/courses/30/lessons/120851

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(my_string) {
    var num = my_string.replace(/[A-Za-z]/g, "").split("");
    var sum = 0;
    
    for (let i of num ) {
        sum += parseInt(i);
    }
    
    return sum;
}