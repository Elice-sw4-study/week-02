//[level 0] 최댓값 만들기(1) 120847
//https://school.programmers.co.kr/learn/courses/30/lessons/120847

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(numbers) {
    // 오름차순 정렬(Ascending Order, ASC)
    numbers.sort(function(comp1, comp2) {
	return comp1 - comp2; 
    });
    
    var n = numbers.length;
    
    return numbers[n - 1] * numbers[n - 2];
}