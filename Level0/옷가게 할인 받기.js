//[level 0] 옷가게 할인 받기 120818
//https://school.programmers.co.kr/learn/courses/30/lessons/120818

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(price) {
    if (price >= 500000)
        return parseInt(price * 0.8);
    else if (price >= 300000)
        return parseInt(price * 0.9);
    else if (price >= 100000)
        return parseInt(price * 0.95);
    else
        return price;
}