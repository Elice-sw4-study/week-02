 // **  1번  *** 
 function solution(input) {
    let sum=0;
    for(let i=0; i<input.length; i++){
        if(input[i]==="아메리카노")sum+=4100;
        else if(input[i]==="카페라떼")sum+=4600;
        else sum+=5100;
    }
  return sum;
}

// ** 2번 ***

 function solution(input) {
    const num_tuple = ['2','3','5','6','7','8','9'];
    let result=[];
    for(let i=0; i<input.length; i++){
        if(num_tuple.includes(input[i]))result.push(input[i]);
        if(result.length===5)break;
    }
    return result;
  }

  // ** 3번 ***


function solution(a, b) {
    let answer="";
    if(a===b || a>b || a>=15)return"오류";
    if(b>15)b=15;
    for(let i=a; i<=b; i++){
        for(let j=1; j<=i; j++){
            answer+='*';
        }
        if(i!==b)
        answer+='\n';
    }
  return answer;
}

  // ** 4번 ***

function solution(input) {
    let answer=[]
    let num = input.split('\n').map(Number);
    
    let a1 = num[0]; 
    let a2 = num[1]; 
    let b1 = num[2]; 
    let b2 = num[3]; 

    if(a2 < b1 || a1 > b2) return 'X'  // 포개지는구간 없는경우
    num=num.sort((a,b)=>a-b)
    answer.push(num[1])
    answer.push(num[2])
    return answer   
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
  // ** 5번 ***
  
  function solution(string) {
    let str="";
    for(let x of string){
        if (x === '(' ||
            x === ')' ||
            x === '[' ||
            x === ']' ||
            x === '{' ||
            x === '}')
        str+=x
    }
    let check = []
    let result = "정상";
    let dict = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i=0; i<str.length; i++) {
        if(str[i] === "(" || str[i] === "[" || str[i] === "{")
            check.push(str[i]);
        else {
            let tmp = check.pop();
            if (str[i] !== dict[tmp]) 
                result="비정상";
            }
    }
    if (check.length !== 0)
        result = "비정상";
    return result
}
