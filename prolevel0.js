// 1. 몫 구하기
function solution(num1, num2) {
  return Math.trunc(num1/num2);
}

// 2. 두 수의 차
function solution(num1, num2) {
  return num1 - num2;
}

// 3. 나머지 구하기
function solution(num1, num2){
  return num1 % num2;
}

// 4. 두 수의 곱
function solution(num1, num2) {
  return num1 * num2
}

// 5. 숫자 비교하기
function solution(num1, num2) {
  return num1 === num2 ? 1 : -1
}

// 6. 두 수의 합
function solution(num1, num2) {
  return num1 + num2
}

// 7. 나이 출력
function solution(age) {
  return 2022 - age + 1
}

// 8. 각도기
function solution(angle) {
  return [0, 90, 91, 180].filter(v => angle >= v).length
}

// 9. 두 수의 나눗셈
function solution(num1, num2) {
  return Math.trunc(num1 / num2 * 1000)
}

// 10. 짝수의 합
function solution(n) {
  ret = 0;
  for(let i = 1; i <= n; i++){
      if(i % 2 === 0){
          ret += i
      }
  }
  return ret;
}

// 11. 배열의 평균값
function solution(numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length
}

// 12. 양꼬치
function solution(n, k) {
  return n * 12000 + k * 2000 - (Math.floor(n / 10) * 2000)
}

// 13. 삼각형의 완성조건 (1)
function solution(sides) {
  sides.sort((a,b) => b-a)
  return sides[0] < sides[1] + sides[2] ? 1 : 2
}

// 14. 최댓값 만들기 (1)
function solution(numbers) {
  numbers.sort((a,b) => b-a)
  return numbers[0]*numbers[1];
}

// 15. 점의 위치 구하기
function solution(dot) {
  if(dot[0] > 0){
      return dot[1] > 0 ? 1 : 4
  }else{
      return dot[1] > 0 ? 2 : 3
  }
}

// 16. 문자열 뒤집기
function solution(my_string) {
  return my_string.split('').reverse().join('')
}

// 17. 피자 나눠 먹기 (3)
function solution(slice, n) {
  if(n % slice !== 0){
      if(n < slice){
          return 1
      }else{
          return Math.floor(n / slice) + 1
      } 
  }
  return n / slice
}

// 18. 짝수 홀수 개수
function solution(num_list) {
  odd = 0;
  even = 0;
  ret = [];
  for(let i = 0; i < num_list.length; i++){
      num_list[i] % 2 === 1 ? odd++ : even++
  }
  ret.push(even, odd);
  return ret
}

// 19. 배열 원소의 길이
function solution(strlist) {
  return strlist.map(v => v.length)
}

// 20. 배열 뒤집기
function solution(num_list) {
  return [...num_list].reverse();
}

// 21. 피자 나눠 먹기 (1)
function solution(n) {
  return n % 7 !== 0 ? Math.floor(n / 7) + 1 : n / 7
}

// 22. 중복된 숫자 개수
function solution(array, n) {
  return array.filter(v => [n].includes(v)).length
}

// 23. 머쓱이보다 키 큰 사람
function solution(array, height) {
  return array.filter(item => item > height).length
}

// 24. 특정 문자 제거하기
function solution(my_string, letter) {
  return Array.from(my_string).filter(t => t !== letter).join('');
}

// 25. 중앙값 구하기
function solution(arr){
  arr.sort((a,b) => a-b)
  let mid = parseInt(arr.length / 2)
  return arr[mid]
}

// 26. 배열 자르기
function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2+1)
}

// 27. 아이스 아메리카노
function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}

// 28. 옷가게 할인 받기
function solution(price) {
  let ret = price >= 500000 ? price * 0.8 : price >= 300000 ? price * 0.9 : price >= 100000 ? price * 0.95 : price
  return Math.floor(ret)
}

// 29. 문자 반복 출력하기
function solution(my_string, n) {
  return [...my_string].map(v => v.repeat(n)).join("");
}

// 30. 배열의 유사도
function solution(s1, s2) {
  return s1.filter((item) => s2.includes(item)).length;
}

// 31. 순서쌍의 개수
function solution(n) {
  let ans = 0;
  for (let i = 1; i < Math.sqrt(n); i++) // 제곱근까지만 돌려도 됨
      if (n%i === 0) ans+=2;
  return Number.isInteger(Math.sqrt(n)) ? ans+1 : ans; // isInteger 정수인지 판별
}

// 32. 짝수는 싫어요
function solution(n) {
  odd = [];
  for(let i = 1; i <= n; i++){
      if(i % 2 === 1) odd.push(i)
  }
  return odd;
}

// 33. 배열 두배 만들기
function solution(numbers) {
  return numbers.reduce((acc, cur) => [...acc, cur * 2], []); // 계속 공백이 포함된 배열을 확산
}

// 34. 편지
function solution(message) {
  return message.length * 2
}

// 35. 모음 제거
function solution(my_string) {
  return my_string.split('').filter(v => !['a', 'e', 'i', 'o', 'u'].includes(v)).join('')
}

// 36. 숨어있는 숫자의 덧셈 (1)
function solution(my_string) {
  const regex = /[^0-9]/g;  // 숫자를 제외한 문자만 검색
  let ret = my_string.replace(regex, '');  // 문자를 공백으로 치환
  return ret.split('').reduce((acc, cur) => acc + Number(cur), 0)
}

// 37. 자릿수 더하기
function solution(n) {
  return n.toString().split('').reduce((acc, cur) => acc + Number(cur), 0)
}

// 38. 문자열안에 문자열
function solution(str1, str2) {
  return str1.split(str2).length > 1 ? 1 : 2
}

// 39. 제곱수 판별하기
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2
}

// 40. 개미 군단
function solution(hp) {
  ret = hp % 5
  return ret === 4 ? Math.trunc(hp/5) + 2 : ret === 3 ? Math.trunc(hp/5) + 1 : Math.trunc(hp/5) + ret
}

// 41. 대문자와 소문자
function solution(my_string) {
  let answer = '';
  for (let i of my_string){
      answer += i === i.toLowerCase() ? i.toUpperCase() : i.toLowerCase();   
  }
  return answer;
}

// 42. 암호 해독
function solution(cipher, code) {
  let ret = '';
  for (let i = code - 1; i < cipher.length; i += code) {
    ret += cipher[i];
  }
  return ret;
}

// 43. 가위 바위 보
function solution(rsp) {
  arr = [...rsp]
  ret = [];
  for(i of arr){
      i == 2 ? ret.push(0) : i == 0 ? ret.push(5) : ret.push(2)
  }
  return ret.join('')
}

// 44. 문자열 정렬하기 (1)
function solution(my_string){
  return my_string.replace(/[^0-9]/g, '').split('').sort((a,b) => a-b).map(n => Number(n))
}

// 45. 세균 증식
function solution(n, t) {
  return n*(2**t)
}

// 46. 주사위의 개수
function solution(box, n) {
  return box.reduce((acc, cur) => acc * Math.floor(cur / n), 1);
}

// 47. n의 배수 고르기
function solution(n, numlist) {
  return numlist.filter((v,i) => v%n === 0)
}

// 48. 최댓값 만들기 (2)
function solution(numbers) {
  ret = -100000000; // 최솟값 -1억
  for(let i = 0; i < numbers.length; i++){
      for(let j = 0; j < numbers.length; j++){
          if(i !== j){
              ret = Math.max(numbers[i]*numbers[j], ret)
          }
      }
  }
  return ret;
}

// 49. 직각삼각형 출력하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    // console.log(Number(input[0]));
    let ret = ''
    for(let i = 0; i < +input[0]; i++){
        for(let j = 0; j <= i; j++){
            ret += '*'
        }
        ret += '\n'
    }
    console.log(ret)
});

// 50. 인덱스 바꾸기
function solution(my_string, num1, num2) {
  arr = [...my_string]
  ret = []
  for(let i = 0; i < arr.length; i++){
      if(i === num1){
          ret.push(arr[num2])
      }else if(i === num2){
          ret.push(arr[num1])
      }else{
          ret.push(arr[i])
      }
  }
  return ret.join('');
}

// 51. 배열 회전시키기
function solution(numbers, direction) {
  if (direction === 'right') {
      numbers.unshift(numbers.pop());
  } else {
      numbers.push(numbers.shift());
  }
  return numbers;
}

// 52. 가장 큰 수 찾기
function solution(array) {
  let cnt = 0;
  for(let i = 0; i < array.length; i++){
      cnt = Math.max(cnt, array[i])
  }
  return [cnt, array.indexOf(cnt)]
}

// 53. 외계행성의 나이
function solution(age) {
  return age.toString().split("").map((v) => "abcdefghij"[v]).join("");
}

// 54. 피자 나눠 먹기 (2)
function solution(n) {
  for(let i = 1; i <= 100; i++){
      if(i*6%n === 0) return i
  }
}

// 55. 369게임
function solution(order) {
  return order.toString().split('').filter(v => ['3', '6', '9'].includes(v)).length
}

// 56. 약수 구하기
function solution(n) {
  ret = []
  for(let i = 1; i <= n; i++){
      if(n%i === 0) ret.push(i) 
  }
  return ret;
}

// 57. 숫자 찾기
function solution(num, k) {
  let index = ('a'+num).indexOf(k);
  return index === -1 ? -1 : index;
}

// 58. 문자열 정렬하기 (2)
function solution(my_string) {
  return my_string.toLowerCase().split('').sort().join('')
}

// 59. 합성수 찾기
function solution(n) {
    ret = []
    arr = Array(n).fill(1).map((v,i) => v+i)
    for(i of arr){
        if(Number.isInteger(i / 2) &&  i !== 2){
            ret.push(i)
            continue;
        }
        if(Number.isInteger(i / 3) &&  i !== 3){
            ret.push(i)
            continue;
        }
        if(Number.isInteger(i / 5) &&  i !== 5){
            ret.push(i)
            continue;
        }
        if(Number.isInteger(i / 7) &&  i !== 7){
            ret.push(i)
            continue;
        }
    }
    return ret.length
}

// 60. 중복된 문자 제거
function solution(my_string) {
  return [...my_string].filter((v, i) => [...my_string].indexOf(v) === i).join('')
}

// 61. 모스부호 (1)
function solution(letter) {
  morse = { 
  '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
  '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
  '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
  '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
  '-.--':'y','--..':'z'
  }
  arr = letter.split(' ');
  ret = []
  for(i of arr){
      ret.push(morse[i])
  }
  return ret.join('')
}

// 62. A로 B 만들기
function solution(before, after) {
  return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0
}

// 63. 팩토리얼
function solution(n) {
  if(n === 3628800){
      return 10
  }else if(n >= 362880){
      return 9
  }else if(n >= 40320){
      return 8
  }else if(n >= 5040){
      return 7
  }else if(n >= 720){
      return 6
  }else if(n >= 120){
      return 5
  }else if(n >= 24){
      return 4
  }else if(n >= 6){
      return 3
  }else if(n >= 2){
      return 2
  }else{
      return 1
  }
}

// 64. 2차원으로 만들기
function solution(num_list, n) {
  return Array(num_list.length / n).fill([]).map(() => num_list.splice(0, n))
}

// 65. 가까운 수
function solution(array, n) {
  ret = []
  arr = array.sort((a,b) => a-b)
  for(i of arr){
      ret.push(Math.abs(i - n))
  }
  return arr[ret.indexOf(Math.min.apply(null, ret))] 
}

// 66. k의 개수
function solution(i, j, k) {
  let ret ='';
  for(i; i <= j; i++){
      ret += i;
  }
  return ret.split(k).length-1;
}

// 67. 진료 순서 정하기
function solution(emergency) {
  let sorted = emergency.slice().sort((a,b)=>b-a);
  return emergency.map(v=>sorted.indexOf(v)+1);
}

// 68. 한 번만 등장한 문자
function solution(s) {
  ret = [];
  arr = s.split('').sort()
  for(let i = 0; i < arr.length; i++){
      if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) ret.push(arr[i])
  }
  return ret.join('')
}

// 69. 숨어있는 숫자의 덧셈 (2)
function solution(my_string) {
  let ret = 0;
  for(let i = 0; i < my_string.length; i++){
      let num = ''
      while(!isNaN(Number(my_string[i]))){
          num += my_string[i]
          i++
      }
      ret += +num
  }
  return ret
}

// 70. 이진수 더하기
function solution(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2)
}