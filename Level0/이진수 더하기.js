//[level 0] 이진수 더하기 120885
//https://school.programmers.co.kr/learn/courses/30/lessons/120885

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(bin1, bin2) {   
    var re_bin1 = bin1.split('').reverse().join('');
    var re_bin2 = bin2.split('').reverse().join('');
    
    var sum1 = 0;
    var sum2 = 0;
    
    for (let i = 0; i < re_bin1.length; i++) { //bin1 10진수 변환
        sum1 += re_bin1[i] * (2 ** i);
    }
    for (let i = 0; i < re_bin2.length; i++) { //bin2 10진수 변환
        sum2 += re_bin2[i] * (2 ** i);
    }
    
    var sum3 = sum1 + sum2;
    var re_bin3 ="";
    
    while (parseInt(sum3 / 2) > 0) {
        re_bin3 += (sum3 % 2);
        sum3 = parseInt(sum3 / 2);
    }
        re_bin3 += sum3;
    
    var bin3 = re_bin3.split('').reverse().join('');
    
    return bin3;
}