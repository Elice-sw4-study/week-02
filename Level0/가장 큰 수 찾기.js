//[level 0] 가장 큰 수 찾기 120899
//https://school.programmers.co.kr/learn/courses/30/lessons/120899

//결과 
//정확성: 0.0
//합계: 0.0 / 100.0

function solution(array) {
    var answer = [];
    var arr = array;
    
    arr.sort(function(a, b) { //내림차순으로 정렬
        return b - a;
    })
    
    var x = arr[0];
    answer.push(x);
    
    var y = array.indexOf(x);
    
    return y;
}