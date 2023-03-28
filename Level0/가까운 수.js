//[level 0] 가까운 수 120890
//https://school.programmers.co.kr/learn/courses/30/lessons/120890

//결과 
//정확성: 9.1
//합계: 9.1 / 100.0

function solution(array, n) {
    var chk = []; //n과 요소 차이 절댓값 리스트 chk
    
    for (let a of array) {
        chk.push(Math.abs(n - a));
    }

    
    var chk_sort = chk.sort(function(a, b) { //chk의 최솟값 구하기 위해 정렬
        return a - b;
    }) 
    var min = chk_sort[0]; //chk의 최솟값
    
    for (let i = 0; i < chk.length; i++){
        if (chk[i] == min) {
            //출력으로 i값이나 chk[i]값을 받아오면 제대로 작동하는데 return array[i]하면 작동 안함
            return array[i];
        }
            
    }
}