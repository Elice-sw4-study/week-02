//[level 0] 369게임 120891
//https://school.programmers.co.kr/learn/courses/30/lessons/120891

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

/*
테스트케이스 3 런타임에러
function solution(order) {
    var str = order.toString();
    
    var answer = str.match(/3|6|9/g);
    
    if (answer.length == 0)
        return 0;
    else
        return answer.length;
}
3, 6, 9가 포함되지 않는 값에 대해서는 match의 리턴 값이 null을 리턴합니다.

function solution(order) {
    var str = order.toString();
    
    var answer = str.match(/3|6|9/g);
    
    if (!(!answer)) { //비어있지 않으면 - null이 아니면
        return answer.length;
    }
    else return 0;
}
*/
function solution(order) {
    var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
    
    return answer;
}