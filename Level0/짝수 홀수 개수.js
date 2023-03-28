//[level 0] 짝수 홀수 개수 120824
//https://school.programmers.co.kr/learn/courses/30/lessons/120824

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(num_list) {
    var odd = 0; //홀수
    var even = 0; //짝수
    
    for (let i of num_list) {
        if (i % 2 == 0)
            even += 1;
        else
            odd += 1;
    }
    
    var answer = [even, odd];
    
    return answer;
}