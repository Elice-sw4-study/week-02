//[level 0] 배열의 평균값 120817
//https://school.programmers.co.kr/learn/courses/30/lessons/120817

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(numbers) {
    var sum = 0;
    
    for (let i of numbers) {
        sum += i
    }
    
    return sum / numbers.length;
}