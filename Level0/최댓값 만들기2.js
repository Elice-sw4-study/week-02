//[level 0] 최댓값 만들기 (2) 120862
//https://school.programmers.co.kr/learn/courses/30/lessons/120862

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(numbers) {
    var answer = [];
    
    numbers.sort(function(a, b) { //오름차순 정렬
        return a - b;
    })
    answer.push(numbers[0] * numbers[1]);
    
    numbers.sort(function(a, b) { //내림차순 정렬
        return b - a;
    })

    answer.push(numbers[0] * numbers[1]);
    
    return Math.max(...answer);
}