//1. 두 수의 차
function solution(num1, num2) {
    var answer = num1 - num2;
    return answer;
}

//2. 몫 구하기
function solution(num1, num2) {
    var answer = Math.floor(num1/num2);
    return answer;
}

//3. 두 수의 합
function solution(num1, num2) {
    var answer = num1+num2;
    return answer;
}

//4. 두 수의 곱
function solution(num1, num2) {
    var answer = num1*num2;
    return answer;
}

//5. 두 수의 나눗셈
function solution(num1, num2) {
    var answer = Math.floor((num1/num2) * 1000);
    return answer;
}

//6. 숫자 비교하기
function solution(num1, num2) {
    var answer = 0;
    if( num1 == num2 ) {
        answer = 1;
    } else {
        answer = -1;
    }
    return answer;
}

//7. 나머지 구하기
function solution(num1, num2) {
    var answer = num1 % num2;
    return answer;
}

//8. 나이 출력
function solution(age) {
    var answer = 2022 - (age - 1);
    return answer;
}

//9. 각도기
function solution(angle) {
    var answer = 0;
    if(0 < angle && angle < 90){
        answer = 1;
    } else if(angle === 90) {
        answer = 2;
    } else if(90 < angle && angle < 180){
        answer = 3;
    } else if (angle === 180) {
        answer = 4;
    }
    return answer;
}

//10. 짝수의 합
function solution(n) {
    var answer = 0;
    for(let a = 0; a<=n; a+=2) {
        answer += a;
    }
    return answer;
}

//11. 배열의 평균값
function solution(numbers) {
    var answer = 0;
    for(let i=0; i<numbers.length; i++) {
        answer += numbers[i];
    }
    return (answer/numbers.length);
}

//12. 양꼬치
function solution(n, k) { 
    let a = n * 12000;//양꼬치 총값
    let drink = (k - (Math.floor(n/10))) * 2000; //음료 총값
    var answer = a + drink;
    return answer;
}

//13. 점의 위치 구하기
function solution(dot) {
    var answer = 0;
    const x = dot[0];
    const y = dot[1]
    
    if( x > 0 && y > 0) {
        answer = 1;
    } else if ( x < 0 && y > 0 ) {
        answer = 2;
    } else if ( x < 0 && y < 0 ) {
        answer = 3;
    } else if ( x > 0 && y < 0 ) {
        answer = 4;
    }
    return answer;
}

//14. 머쓱이보다 키 큰 사람
function solution(array, height) {
    var answer = array.filter(tall => tall > height);
    return answer.length;
}

//15. 피자 나눠 먹기 (1)
function solution(n) {
    var answer = Math.ceil(n / 7);
    return answer;
}

//16. 최댓값 만들기 (1)
function solution(numbers) {
    numbers.sort((a,b)=>b-a);// 내림차순으로 정렬
    return numbers[0]*numbers[1];
}

//17. 배열 원소의 길이
function solution(strlist) {
    var answer = strlist.map((word) => word.length);
    return answer;
}

//18. 중복된 숫자 개수
function solution(array, n) {
    var answer = array.filter(num => num === n).length;
    return answer;
}

//19. 삼각형의 완성조건 (1)
function solution(sides) {
    var answer = 0;
    let a = sides.sort((a,b)=> a-b); //오름차순 정렬
    if(a[2] < a[1]+a[0]) {
        answer = 1;
    } else if (a[2] >= a[1]+a[0]) {
        answer = 2;
    }
    return answer;
}

//20. 배열 자르기
function solution(numbers, num1, num2) {
    var answer = numbers.slice(num1,num2+1);
    return answer;
}

//21. 문자열 뒤집기
function solution(my_string) {
    var answer = my_string.split('').reverse().join('');
    return answer;
}

//22. 배열 뒤집기
function solution(num_list) {
    var answer = num_list.reverse();
    return answer;
}

//23. 특정 문자 제거하기
function solution(my_string, letter) {
    var answer = my_string.split('').filter(a => a !== letter).join('');
    return answer;
}
//개인적으로 신박했던거
function solution(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}

//24. 짝수 홀수 개수
function solution(num_list) {
    var answer = [];
    answer[0] = num_list.filter((a)=> (a%2 == 0)).length; //짝수
    answer[1] = num_list.filter((b)=> (b%2 != 0)).length; //홀수
    return answer;
}

//25. 순서쌍의 개수
function solution(n) {
    var answer = 0;
    for(let i=0; i <=n; i++) {
        if(n%i===0) {
            answer ++
        }
    }
    return answer;
}

//26. 중앙값 구하기
function solution(array) {
    var answer = 0;
    let arr = array.sort((a,b) => a-b); //오름차순정렬
    answer = array[Math.floor(arr.length / 2)];
    return answer;
}

//27. 배열의 유사도
function solution(s1, s2) {
    var answer = (s1.filter((x) => s2.includes(x))).length;
    //includes()를 통해 s2에 x가 포함인지 아닌지 검사
    return answer;
}

//30. 문자 반복 출력하기
function solution(my_string, n) {
    var answer = [];
    let a = my_string.split('');
    for(let i=0; i<my_string.length; i++) {
        answer.push(a[i].repeat(n));
    }
    return answer.join('');
}

//31. 옷가게 할인 받기
function solution(price) {
    var answer = 0;
    if (price >= 500000) {
        answer = Math.floor(price - price * 0.2);
    } else if (price >= 300000) {
        answer = Math.floor(price - price * 0.1);
    } else if (price >= 100000) {
        answer = Math.floor(price - price * 0.05);
    } else {
        answer = price;
    }
    return answer;
}

//32. 아이스 아메리카노
function solution(money) {
    let answer = [];
    let n = Math.floor(money / 5500); //구매 가능한 커피 수
    let coin = money - (n * 5500); //잔돈
    answer.push(n, coin);
    return answer;
}

//33. 배열 두배 만들기
function solution(numbers) {
    var answer = numbers.map((x) => x*2);
    return answer;
}

//34. 짝수는 싫어요
function solution(n) {
    var answer = [];
    for(let i=0; i<=n; i++){
        if(i%2 != 0){
            answer.push(i);
        }
    }
    return answer;
}

//35. 편지
function solution(message) {
    var answer = (message.length)*2;
    return answer;
}

//36. 모음 제거
function solution(my_string) {
    let a = ['a', 'e', 'i', 'o', 'u'];
    let answer = my_string;
    for (let i = 0; i < a.length; i++) {
        answer = answer.split(a[i]).join('');
    }
    return answer;
}

//37. 숨어있는 숫자의 덧셈 (1)
function solution(my_string) {
    var answer = 0;
    let a = my_string.split('');
    for(let i=0; i<a.length; i++) {
        if(isNaN(a[i])===false) {
            answer += Number(a[i]);
        }
    }
    return answer;
}

//38. 자릿수 더하기
function solution(n) {
    var answer = 0;
    let a = n.toString().split('');
    for(let i=0; i<a.length; i++) {
        answer += Number(a[i]);
    }
    return answer;
}

//39. 문자열안에 문자열
function solution(str1, str2) {
    var answer = 0;
    if(str1.indexOf(str2) >= 0 ) {
        answer = 1;
    } else if ( str1.indexOf(str2) < 0 ) {
        answer = 2;
    }
    return answer;
}

//40. 개미 군단
function solution(hp) {
    var answer = 0;
    let a = Math.floor(hp/5); //장군개미 수
    let b = Math.floor((hp - a * 5)/3); //병정개미 수
    let c = hp - a * 5 - b*3//일개미 수
    answer = a+b+c
    return answer;
}

//41. 제곱수 판별하기
function solution(n) {
    var answer = 0;
    let a = Math.sqrt(n);
    if(a%1 !== 0){
        answer = 2
    } else {
        answer = 1;
    }
    return answer;
}

//42. 피자 나눠 먹기 (3) Math.ceil 안쓰기
function solution(slice, n) {
    if(slice >= n){
        return 1
    }
    else if(slice < n & n%slice == 0){
        return n/slice
    }
    else{
        return parseInt(n/slice)+1
    }
}

//42. 암호 해독
function solution(cipher, code) {
    var answer = [];
    for(let i=code-1; i<=cipher.length; i+=code) {
        answer.push(cipher[i])
    }
    return answer.join('');
}

//43. 대문자와 소문자
function solution(my_string) {
    var answer = [];
    let arr = my_string.split('');
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == arr[i].toUpperCase()) { 
            answer.push(arr[i].toLowerCase())
        } else {
            answer.push(arr[i].toUpperCase())
        }
        
    }
    return answer.join('');
}

//44. 가위 바위 보
function solution(rsp) {
    var answer = ''; 
    for(let i = 0; i < rsp.length; i++) {
        let ch = rsp.charAt(i);
        if(ch === "2") {
            answer += "0";
        }
        else if(ch === "0") {
            answer += "5";
        }
        else if(ch === "5") {
            answer += "2";
        }
    }
    return answer;
}

//45. 문자열 정렬하기 (1)
function solution(my_string) {
    var answer = [];
    let number = my_string.match(/\d/g).sort((a, b) => a - b);
    answer = number.map(n => Number(n));
    return answer;
}

//46. 세균 증식
function solution(n, t) {
    let answer = n;
    for(let i = 0; i < t; i++){
        answer *= 2
    }
    return answer;
}

//47. n의 배수 고르기
function solution(n, numlist) {
    var answer = numlist.filter(num => num % n === 0);
    return answer;
}

//48. 주사위의 개수
function solution(box, n) {
    let answer = 0;
    let square = box.map(x => Math.floor(x / n));
    answer = square.reduce((a,b) =>  a* b );
    return answer
}

//49. 최댓값 만들기 (2)
function solution(numbers) {
    var answer = [];
    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i + 1; j < numbers.length; j++){
            answer.push(numbers[i] * numbers[j]);
        }
    }
    return Math.max(...answer);
}

//50. 직각삼각형 출력하기
//풀긴 풀었는데 아직도 돌아가는 방식을 잘 모르겠다.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for(let i = 1; i <= +input[0]; i += 1) {
        console.log('*'.repeat(i))
    };
});

//51. 인덱스 바꾸기
function solution(my_string, num1, num2) {
    var answer = my_string.split("");
    answer.splice(num1, 1, my_string[num2]);
    answer.splice(num2, 1, my_string[num1]);
    return answer.join('');
}

//52. 배열 회전시키기
function solution(numbers, direction) {
    if(direction == "right") {
        pop_number = numbers.pop()
        numbers.unshift(pop_number)
        return numbers
    } else {
        shift_number = numbers.shift()
        numbers.push(shift_number)
        return numbers
    }
}

//53. 가장 큰 수 찾기
function solution(array) {
    var answer = [];
    let maxNum = Math.max(...array); //최댓값
    let indexNum = array.indexOf(maxNum); //최댓값의 인덱스
    answer.push(maxNum);
    answer.push(indexNum);
    
    return answer;
}

//54. 외계행성의 나이
//더 깔끔한 방법이 있을것 같은데 모르겠다.
function solution(age) {
    var answer = '';
    let ageArr = String(age).split('');
    let number = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
     for(let i = 0; i < ageArr.length; i++) {
        let index = Number(ageArr[i]);
        answer += number[index];
    }
    return answer;
}

//55. 피자 나눠 먹기 (2)
function solution(n) {
    var answer = 0;
    let pizza = 6;
    while(pizza%n !== 0) {
        pizza+=6
    } 
    answer = pizza/6;
    return answer;
}

//56. 369게임
function solution(order) {
    var answer = 0;
    let num = String(order).split('');
    for(let i=0; i<num.length; i++) {
        if(num[i] == 3 || num[i] == 6 || num[i] == 9) {
            answer++;
        }
    }
    return answer;
}

//57. 약수 구하기
function solution(n) {
    var answer = [];
    for (let i = 0; i < n+1; i++) {
        if (n%i === 0) {
            answer.push(i);
        }
    }
    return answer;
}

//58. 숫자 찾기
function solution(num, k) {
    let answer = -1;
    let arr = String(num).split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == k) {
            answer = i + 1;
            break;
        }
    }
    return answer;
}

//59. 문자열 정렬하기 (2)
function solution(my_string) {
    var answer = my_string.toLowerCase().split("").sort().join("");
    return answer;
}

//60. 합성수 찾기
/* 이해를 못해서 못 풀었다. */

//61. 중복된 문자 제거
function solution(my_string) {
    let answer = [];
    for (let i of my_string.split('')) {
        if (answer.indexOf(i) === -1) {
            answer.push(i);
        }
    }
    return answer.join('');
}

//62. 모스부호 (1)
function solution(letter) {
    var answer = '';
    const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'}
    answer = letter.split(" ").map(a => morse[a]).join("");
    return answer;
}

//63. A로 B 만들기
/* 구글에서 찾은 모범 답안인데 이해 못함. */
function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}

//64. 팩토리얼
function solution(n) {
    var answer = 1;
    for(let i = 1; i <= n; i++){
        answer *= i;
        
        if(answer === n){
            return i;
        }
        
        if(answer > n){
            return i - 1;
        }
    }
}

//65. 숨어있는 숫자의 덧셈 (2)
function solution(my_string) {
    var answer = 0;
    let nums = my_string.match(/[0-9]+/g); //숫자부분 구하기
    if (!nums) { //자연수 없는 경우
        return 0;
    }
    const sum = nums.reduce((acc, cur) => acc + Number(cur), 0);
    answer = sum;
    return answer;
}

//66. 진료 순서 정하기
/* 이해를 못해서 못 풀었다. */

//67. 문자열 계산하기
function solution(my_string) {
    const splited = my_string.split(" ");
    let ans = Number(splited[0]);
    splited.forEach((item, index) => {
        if(item === "+"){
            ans += Number(splited[index + 1]);
        }
        if(item === "-"){
            ans -= Number(splited[index + 1]);
        }
    })
    
    return ans;
}

//68. 영어가 싫어요
function solution(numbers) {
    const nums = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    };
    const regex = new RegExp(Object.keys(nums).join('|'), 'g');
    return + numbers.replace(regex, key => nums[key]);
}

//69. 7의 개수
function solution(array) {
    var answer = 0;
    let arr = array.join("").split("");
    let result = arr.filter(a => a === '7');
    answer = result.length;
    return answer;
}

//70. 잘라서 배열로 저장하기
function solution(my_str, n) {
    let arr = [];
    for (let i = 0; i < my_str.length; i+= n) {
        arr.push(my_str.slice(i, i + n));
    }
    return arr;
  }