//[level 0] 진료순서 정하기 120835
//https://school.programmers.co.kr/learn/courses/30/lessons/120835

//결과 
//정확성: 25.0
//합계: 25.0 / 100.0

function solution(emergency) {
    var answer = [];

    var emer_sort = emergency.sort(function(a, b) { //내림차순 정렬
        return b - a;
    })
    
    for (let i of emergency){
        for (let j = 0; j < emergency.length; j++) {
            if (i === emer_sort[j])
                answer.push(j + 1);
        }
    }
    return answer;
}