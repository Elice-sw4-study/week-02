//1) 피자 나눠먹기
function solution(n) {
    return Math.ceil(n/7)
}

//2) 배열 자르기
function solution(numbers, num1, num2) {
    var answer = [];
    for(i=num1;i<=num2;i++){
        answer.push(numbers[i])
    }
    
    return answer;
}

//3) 중복된 숫자 개수
function solution(array, n) {
    let answer = array.filter(e=>e===n)
    return answer.length
}

//4) 짝수 홀수 개수
function solution(num_list) {
    var answer = [0,0];
    for(let i=0; i<num_list.length;i++){
        if(num_list[i]%2===0) answer[0]++
        else answer[1]++
    }
    return answer;
}

//5) 특정 문자 제거하기
function solution(my_string, letter) {
    return my_string.replaceAll(`${letter}`,'')
 }

//6) 배열 뒤집기
function solution(num_list) {
    var answer = [];
    for(let i=num_list.length-1; i>=0; i--){
        answer.push(num_list[i])
    }
    return answer;
}
//or
function solution(num_list) {
    return num_list.revers()
}

//7) 아이스 아메리카노
function solution(money) {
    let coffee = parseInt(money/5500)
    return [coffee,money-coffee*5500];
}

//8) 문자 반복 출력하기
function solution(my_string, n) {
    let answer = my_string.split('').map(e => e.repeat(n))
    return answer.join('')
}

//9) 배열의 유사도
function solution(s1, s2) {
    let count=0
    for(let i=0; i<s1.length; i++){
        for(let j=0; j<s2.length; j++){
            if(s1[i]===s2[j]) count++
        }
    }
    return count
}
//or
function solution(s1, s2) {
    return s1.filter(e=>s2.includes(e)).length
}

//10) 옷가게 할인받기
function solution(price) {
    if(price>=100000 && price<300000) return parseInt(price*0.95)
    if(price>=300000 && price<500000) return parseInt(price*0.9)
    if(price>=500000) return parseInt(price*0.8)
    return parseInt(price)
}

//11) 짝수는 싫어요
function solution(n) {
    let answer =[];
    for(let i=1; i<=n; i++){
        if(i%2 !== 0) answer.push(i)
    }
    return answer
}

//12) 순서쌍의 개수
function solution(n) {
    let nums = []
    for(let i=1; i<=n; i++) if(n%i===0) nums.push(i)
    return nums.length
}

//13) 배열 두 배 만들기
function solution(numbers) {
    return numbers.map(num => num*2)
}

//14) 편지
function solution(message) {
    return message.length*2
}

//15) 모음 제거 트을리임
function solution(my_string) {
    let filterWord = ['a','e','i','o','u']
    
    for(let e of filterWord){
        my_string.replaceAll(e,'')
    }
    return my_string
 }

//16) 숨어있는 숫자의 덧셈(1)
function solution(my_string) {
    let strs = my_string.toLowerCase().split('')
    let nums = strs.filter((e) => e<10)
    return nums.reduce((a,b)=> parseInt(a)+parseInt(b))
}

//17) 자릿수 더하기
function solution(n) {
    let nums = n.toString().split('')
    let answer = nums.map(e=>Number(e)).reduce((a,b) => a+b)
    return answer
}

//18) 문자열 안에 문자열
function solution(str1, str2) {
    let imIn = str1.replace(`${str2}`,'').length
    let imOut = str1.length
    if(imIn===imOut) return 2
    return 1
}

//19) 제곱수 판별하기
function solution(n) {
    let origin = Math.sqrt(n)
    let cut = Math.floor(origin)
    
    if(origin ===cut) return 1
       return 2
   }

//20) 개미군단 
function solution(hp) {
    return Math.floor(hp/5)+Math.floor((hp%5)/3)+((hp%5%3)/1)
}