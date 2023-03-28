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
*/
function solution(order) {
    var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
    
    return answer;
}