//[level 0] 2차원으로 만들기 120842
//https://school.programmers.co.kr/learn/courses/30/lessons/120842

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(num_list, n) {
    var x = parseInt(num_list.length / n);
    
    var answer = new Array(x);
    for (var i = 0; i < answer.length; i++) {
    answer[i] = new Array(n);
    }
   
    for(let z = 0; z < num_list.length;) {
        for (let i = 0; i < x; i++) {
            for (let j = 0; j < n; j++){
                answer[i][j] = num_list[z];
                z++;
            }
        }
    }
    return answer;
}