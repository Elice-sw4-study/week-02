//[level 0] 배열 회전시키기 120844
//https://school.programmers.co.kr/learn/courses/30/lessons/120844

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(numbers, direction) {
    if (direction == "right") {
        numbers.splice(0, 0, numbers[numbers.length - 1]);
        numbers.pop();
    }
    else {
        numbers.push(numbers[0]);
        numbers.shift();
    }
    
    return numbers;
}