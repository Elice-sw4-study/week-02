//[level 0] k의 개수 120887
//https://school.programmers.co.kr/learn/courses/30/lessons/120887

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(i, j, k) {
    var answer = 0;
    var chk = [];
    const mapfn = (arg) => Number(arg);
    
    for(let a = i; a <= j; a++) {
        var str = String(a);
        chk = str.split('').map(mapfn);
        
        for (let c of chk) {
            if (c === k)
                answer ++;
        }
    }
    return answer;
}