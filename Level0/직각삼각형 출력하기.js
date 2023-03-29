//[level 0] 직각삼각형 출력하기 120823
//https://school.programmers.co.kr/learn/courses/30/lessons/120823

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () { 
    var num = Number(input[0]);
    var result = '';
    
    for(let i = 0; i < num; i++){
        for(let j = 0; j <= i; j++){
            result += '*';
        }
        result += '\n';
    }
    console.log(result);
});