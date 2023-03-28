//[level 0] A로 B 만들기 120886
//https://school.programmers.co.kr/learn/courses/30/lessons/120886

//결과 
//정확성: 60.9
//합계: 60.9 / 100.0

function solution(before, after) {
    var chk = after.split();
    var cnt = 0;
    
    for(let s of before) {
        if(!(chk.includes(s)))
            return 0;
        else {
            cnt ++;
            for(let i = 0; i < chk.length; i++) {
                if (chk[i] === s)
                    chk.splice(i, 1);
            }
        }
    }
    if (cnt == before.length)
        return 1;
    else
        return 0;
}