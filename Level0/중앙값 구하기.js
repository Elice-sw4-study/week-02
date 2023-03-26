//[level 0] 중앙값 구하기 120811
//https://school.programmers.co.kr/learn/courses/30/lessons/120811

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(array) {
    // 오름차순 정렬(Ascending Order, ASC)
    array.sort(function(comp1, comp2) {
	return comp1 - comp2; 
    });
    
    var n = parseInt(array.length / 2);
    
    return array[n];
}