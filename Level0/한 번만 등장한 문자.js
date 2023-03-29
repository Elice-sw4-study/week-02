//[level 0] 한 번만 등장한 문자 120896
//https://school.programmers.co.kr/learn/courses/30/lessons/120896

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(s) {
    var sen = s.split('');
    var chk = []; //중복값 체크하는 배열
    var answer = ""; //정답 넣는 문자열
    
    let cnt = 0; //개수 구하는 변수
    
    for (let i = 0; i < sen.length; i++) {
        if (!(chk.includes(sen[i]))) {
            chk.push(sen[i]);
            
            cnt = sen.filter(element => sen[i] === element).length;
            
            if (cnt === 1)
                answer += sen[i];
        }
    }
    
    var result = answer.split('').sort().join('');
    return result;
}