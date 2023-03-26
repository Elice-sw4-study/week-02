//1) 대문자와 소문자
function solution(my_string) {
    let answer = ''
    for(let e of my_string){
        if(e === e.toUpperCase()) answer += e.toLowerCase()
        else answer += e.toUpperCase()
        }
    return answer;
}

//2) 암호 해독
function solution(cipher, code) {
    var answer = '';
    let strs = cipher.split('')
    for(let i=0; i<cipher.length; i++){
        if((i+1)%code===0) answer+=strs[i]
    }
    return answer;
}

//3) 가위 바위 보
function solution(rsp) {
    let answer=[]
    for(let e of rsp){
        if (e==='2') answer.push('0')
        else if (e==='0') answer.push('5')
        else answer.push('2')
    }
    return answer.join('')
}

//4) 문자열 정렬하기(1)
function solution(my_string) {
    var answer = [];
    let nums = my_string.split('').filter((e)=> e<10)
    nums.sort((a,b)=>a-b)
    
    return nums.map((e)=>Number(e));
}

//5) 세균 증식
function solution(n, t) {
    return n*Math.pow(2,t)
}

//6) 주사위의 개수
function solution(box, n) {
    return Math.floor(box[0]/n)*Math.floor(box[1]/n)*Math.floor(box[2]/n)    
 }

 //7) n의 배수 고르기
 function solution(n, numlist) {
    return numlist.filter((e)=> e%n===0)
}

//8) 최댓값 만들기(2)
function solution(numbers) {
    let nums = numbers.sort((a,b)=>a-b)
    const len = nums.length 
    return Math.max(nums[0]*nums[1], nums[len-1]*nums[len-2])
 }

 //9) 직각삼각형 출력하기
 const readline = require('readline');
 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });
 
 let input = [];
 
 rl.on('line', function (line) {
     input = line.split(' ');
 }).on('close', function () {
     console.log(Number(input[0]));
 });

 //10) 인덱스 바꾸기
 function solution(my_string, num1, num2) {
    let strs = my_string.split('');
    [strs[num1], strs[num2]] = [strs[num2], strs[num1]]
    return strs.join('')
}

//11) 배열 회전시키기
function solution(numbers, direction) {
    let lastEle = numbers[numbers.length-1]
    let firstEle = numbers[0]
    
    if(direction === "right"){
        numbers.pop()
        numbers.unshift(lastEle)
    } else{
        numbers.shift()
        numbers.push(firstEle)
    }
    return numbers
}

//12) 가장 큰 수 찾기
function solution(array) {
    let ans = Math.max(...array)
    let key = array.indexOf(ans)
    
    return [ans,key]
}

//13) 외계행성의 나이
function solution(age) {
    let age_universe = ['a','b','c','d','e','f','g','h','i','j']
    let age_array = age.toString().split('');
    return age_array.map((e)=> age_universe[e]).join('')
}

//14) 피자 나눠먹기(2)
function solution(n) {
    for(let i=1; i<=n; i++){
        if(i*6%n===0){
            return i
            break;
        }
    }
}

//15) 369게임
function solution(order) {
    let handclab = ['3','6','9']
    let nums = order.toString().split('')
    
    return nums.filter(e => handclab.includes(e)).length
}

//16) 약수 구하기
function solution(n) {
    let answer = [];
    for(let i=1; i<=n; i++){
        if(n%i===0) answer.push(i)
    }
    return answer;
}

//17) 숫자 찾기
function solution(num, k) {
    let answer =  num.toString().split('').indexOf(k.toString());
    if (answer===-1) answer= -1
    else answer +=1
    
    return answer
}

//18) 문자열 정렬하기
function solution(my_string) {
    return my_string.toLowerCase().split('').sort().join('')
 }

 //19) 합성수 찾기
 function solution(n) {
    let nums = [...Array(n)].map((e,i)=>i+1);
    let answer = 0
    
    for(let num of nums){
        let count = 0;
        for(let a=1; a<=num; a++){
            if (num%a===0) count+=1
            else count+=0
        }
        if (count>2) answer+=1
    }
    return answer
}

 //20) 중복된 문자 제거






 //21) 모스부호
 function solution(letter) {
    let morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    return letter.split(" ").map(e => morse[e]).join("")
}

 //22) A로 B만들기
 function solution(before, after) {
    let before_up = before.split('').sort().join('');
    let after_up = after.split('').sort().join('');
    
    if(before_up===after_up) return 1
    else return 0
}

 //23) 팩토리얼
 function solution(n) {
    let num = 1
 
    for(let i=1; i <= n; i++){ 
        num *= i
        if(num === n) return i
        if(num > n) return i-1
    }
 }

 //24)2차원으로 만들기








 //25) k의 개수
 function solution(i, j, k) {
    let answer = []
    for(let a=i; a<=j; a++){
        answer.push(a)
    }
    return answer.join('').split('').filter((e)=> e===k.toString()).length
}

 //26) 가까운 수
 function solution(array, n) {
    let min = Math.min(...array.map(i => Math.abs(i - n)));
    return array.sort((a, b) => a - b).find(i => Math.abs(i - n) === min);
}
 

 //27) 진료 순서 정하기
 function solution(emergency) {
    let answer = emergency.map(v=> v).sort((a,b)=>b-a)
    return emergency.map((v, i) => answer.indexOf(v) + 1);
}

 //28) 한 번만 등장한 문자





 


 //29) 숨어있는 숫자의 덧셈(2)
 function solution(my_string) {
    let nums = my_string.toLowerCase().replace(/[a-z]/g, " ")
    return nums.split(' ').map(e => Number(e)).reduce((a,b)=>a+b)
}

 //30) 이진수 더하기

