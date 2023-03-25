// 문제1 : 배열의 삭제
var nums = [100, 200, 300, 400, 500];
nums.slice(0, 3)

// 문제2 : 배열의 내장함수
var arr = [200, 100, 300];
arr.splice(2, 0, 10000); // 2번 인덱스부터 0개 제거하고 10000값을 추가

// 문제3 : 변수의 타입
var arr = [100, 200, 300];
console.log(typeof(arr)); // 4)  object

// 문제4 : 변수의 타입2
// 다음 변수 a를 `typeof(a)`로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?
// 정답 2)  입력 : a = 2.22,   출력 : boolean

// 문제5 : for문 계산
var a = 10;
var b = 2;
for(var i=1; i<5; i+=2){
    a += i;
}
console.log(a+b); // 4) 16

// 문제6 : False
// 다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
// 앗, False로 취급하지 않는 것이 하나 있네요! True를 찾아주세요.
// 정답 2)  1

// 문제7 : 변수명
// 다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.
// 정답 3)  let, 5)  1age

// 문제8 : 객체의 키 이름 중복
var d = {
  'height':180,
  'weight':78,
  'weight':84,
  'temperature':36,
  'eyesight':1
};
console.log(d['weight']); // 78

// 문제9 : concat을 활용한 출력 방법
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = `${year}/${month}/${day} ${hour}:${minute}:${second}`
console.log(result);

// 문제10 : 별 찍기
let num = 5; 
let stars = ''; 
for (let i = 1; i <= num; i++) {
  for (let j = num - i; j > 0; j--) {
    stars += ' ';
  }
  for (let k = 1; k <= (2 * i) - 1; k++) {
    stars += '*';
  }
  stars += '\n';
}
console.log(stars)

// 문제11 : for를 이용한 기본 활용
let s = 0;
for(let i = 1; i <= 100; i++){
  s += i
}
console.log(s)

// 문제12 : 게임 캐릭터 클래스 만들기
const Wizard = class Wizard {
  constructor (health, mana, armor){
      this.health = health;
      this.mana = mana;
      this.armor = armor;
  }
  attack(){
      console.log('파이어볼');
  }
}
const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

// 문제13 : 몇 번째 행성인가요?
function check(n){
  const solar = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성']
  return solar[n+1]
}

// 문제14 : 3의 배수 인가요?
function solution(n){
  return n % 3 === 0 ? '짝' : n 
}

// 문제15 : 자기소개
function solution(name){
  return `안녕하세요. 저는 ${name}입니다.`
}

// 문제16 : 로꾸거
function solution(str){
  return str.split('').reverse().join('')
}

// 문제17 : 놀이기구 키 제한
function solution(key){
  return key >= 150 ? 'YES' : 'NO' 
}

// 문제18 : 평균 점수
function solution(str){
  let arr = str.split(' ')
  return Math.trunc(arr.reduce((acc, cur) => acc + cur) / arr.length) 
}

// 문제19 : 제곱을 구하자
function solution(num){
  let a = num.split(' ')[0]
  let b = num.split(' ')[1]
  return a**b
}

// 문제20 : 몫과 나머지
function solution(num){
  let a = num.split(' ')[0]
  let b = num.split(' ')[1]
  let c = [Math.trunc(a/b), a%b]
  return c.join(' ')
}

// 문제21 : set은 어떻게 만드나요?
// 정답 3)  var x = new Set('javascript');, 5)  var x = new Set();

// 문제22 : 배수인지 확인하기
// 정답 2)  i % 6 == 0

// 문제23 : OX문제
// 정답 X

// 문제24 : 대문자로 바꿔주세요!
function solution(name){
  return name.toUpperCase()
}

// 문제25 : 원의 넓이를 구하세요
function solution(n){
  return n * n * 3.14
  
}

// 문제26 : 행성 문제2
function solution(star){
  const planets = {
    '수성' : 'Mercury',
    '금성' : 'Venus',
    '지구' : 'Earth',
    '화성' : 'Mars',
    '목성' : 'Jupiter',
    '토성' : 'Saturn',
    '천왕성' : 'Uranus',
    '해왕성' : 'Neptune',
  };
  return planets[star]
}

// 문제27 : 객체 만들기
function solution(name, score){
  let key = name.split(' ')
  let value = score.split(' ')
  let object = {}
  for(let i = 0; i < key.length; i++){
    object[key[i]] = Number(value[i])
  }
  return object
}

// 문제28 : 2-gram
function solution(str){
  let ret = []
  for (let i = 0; i < str.length-1; i++){
    ret.push(str[i], str[i+1], '\n')
  }
  return ret
}

// 문제29 : 대문자만 지나가세요
function solution(input){
  return input === input.toUpperCase() ? 'YES' : 'NO'
}

// 문제30 : 문자열 속 문자 찾기
function solution(str, voc){
  return str.indexof(voc)
}

// 문제31 : 자바스크립트 자료형의 복잡도
// 정답 3)  arr.slice(), 5)  arr.includes(5)

// 문제32 : 문자열 만들기
function solution(str){
  return str.split(' ').length
}

// 문제33 : 거꾸로 출력하기
function solution(num){
  return num.split(' ').reverse().join(' ')
}

// 문제34 : sort 구현하기
function solution(num){
  let arr = num.split(' ').sort((a,b) => a-b).join(' ')
  return arr === num ? 'YES' : 'NO'
}

// 문제35 : Factory 함수 사용하기
function one(n){
  function two(value){
    return Math.pow(value, n)
  }
  return two;
}