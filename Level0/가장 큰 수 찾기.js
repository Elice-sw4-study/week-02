//[level 0] 가장 큰 수 찾기 120899
//https://school.programmers.co.kr/learn/courses/30/lessons/120899

//결과 
//정확성: 0.0
//합계: 0.0 / 100.0

function solution(array) {
    var answer = [];
    var arr = array; 
    
    arr.sort(function(a, b) { //array를 내림차순으로 정렬 - arr
        return b - a;
    })
    
    var x = arr[0]; //최댓값
    answer.push(x);
    
    var y = array.indexOf(x); //최댓값의 인덱스 - 작동 안함
    
    return y;
}