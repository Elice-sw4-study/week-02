//[level 0] 모스부호 (1) 120838
//https://school.programmers.co.kr/learn/courses/30/lessons/120838

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(letter) {
    var morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    
    var arr = letter.split(' ');
    var answer = '';
    
    for (let i of arr) {
        answer += morse[i];
    }
    
    return answer;
}