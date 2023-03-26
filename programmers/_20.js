//1) 두 수의 차
function solution(num1, num2) {
    var answer = 0;
    answer += num1 - num2;
    
    return answer;
}

//2) 두 수의 곱
function solution(num1, num2) {
    return num1*num2;
}

//3) 나이 출력
function solution(age) {
    return 2023-age;
}

//4) 숫자 비교하기
function solution(num1, num2) {
    if(num1!==num2) return -1;

    return 1;
}

//5) 몫 구하기
function solution(num1, num2) {
    return parseInt(num1/num2);
}

//6) 두 수의 합
function solution(num1, num2) {
    return num1 + num2; 
}

//7) 나머지 구하기
function solution(num1, num2) {
    return num1%num2;
}

//8) 각도기
function solution(angle) {
    if (angle<=90){
        if(angle===90) return 2;
        return 1;
    } else {
        if (angle===180) return 4;
        return 3;
    }
}

//9)두 수의 나눗셈
function solution(num1, num2) {
    return parseInt(num1/num2*1000);
}

//10)짝수의 합
function solution(n) {
    let answer = 0;
    for(let i=1; i<=n; i++)
        if(i%2===0) answer+=i;
    return answer;
}

//11) 배열의 평균값
function solution(numbers) {
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        sum+=numbers[i];
    }
    return sum/numbers.length;
}

//12) 양꼬치
function solution(n, k) {
    return (k-parseInt(n/10))*2000+n*12000;
}

//13) 피자 나눠먹기
function solution(slice, n) {
    return Math.ceil(n/slice);
}

//14) 점의 위치 구하기
function solution(dot) {
    if(dot[0]<0){
        if(dot[1]<0) return 3
        return 2
    } else{
        if(dot[1]<0) return 4
        return 1
    }
}

//15) 삼각형의 완성조건
function solution(sides) {
    let num = sides.sort((a,b)=>{
        return a-b
    })
    if (num[0]+num[1]>num[2]) return 1
    return 2
}

//16) 배열 원소의 길이
function solution(sides) {
    let num = sides.sort()
    if (num[0]+num[1]>num[2]) return 1
    return 2
}

//17) 최댓값 만들기
function solution(numbers) {
    let len = numbers.length-1
    let num = numbers.sort((a,b)=>{
        return a-b
    })
    return num[len]*num[len-1]
}

//18) 머쓱이보다 키 큰사람
function solution(array, height) {
    let count =0
    for(let i=0; i<array.length; i++){
        if(height<array[i]) count++
    }
    return count
}

//19) 중앙값 구하기
function solution(array) {
    let StoBarray = array.sort((a,b) => a-b)
    return StoBarray[(array.length-1)/2]
}

//20) 문자열 뒤집기
function solution(my_string) {
    let answer = [];
    let string = my_string.split('')
    for(let i=string.length-1; i>=0; i--){
        answer.push(string[i])
    }
    return answer.join('')
}

