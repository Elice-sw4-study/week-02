//[level 0] 인덱스 바꾸기 120895
//https://school.programmers.co.kr/learn/courses/30/lessons/120895

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(my_string, num1, num2) {
    var result = [...my_string];
    
    result.splice(num1, 1, my_string[num2]);
    result.splice(num2, 1, my_string[num1]);
    
    return result.join('');
}