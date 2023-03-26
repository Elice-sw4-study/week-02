// 문제 1
var nums = [100, 200, 300, 400, 500];
nums.pop();
nums.pop();

// 문제 2
var arr = [200, 100, 300];
arr.splice(2, 0, 10000); 

// 문제  3
4
// 문제  4
2
// 문제  5
4
// 문제  6
2
// 문제  7
3,5
// 문제  8
84
// 문제  9

var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';
var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

// 문제  10
const n = prompt('숫자를 입력하세요.');
let tree = '';

for(let i=1; i<=n; i++){
  let star = '';
  for(let j=1; j<=n-i; j++){
    star += ' ';
  }
  for(let k=1; k<=2*i-1; k++){
    star += '*';
  }
  tree += star + '\n';
}
// 문제  11
let s = 0;

for (let i=1; i<=100; i++){
  s += i;
}
// 문제  12
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

// 문제  13

const planets = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];

const n = prompt('몇 번째 행성인가요?');

console.log(planets[n-1]);
// 문제  14

if (n%3 == 0) { // 나머지 연산 %는 n을 3으로 나누었을때 몫이 아닌 나머지 값을 반환합니다.
    console.log('짝');
} else {
    console.log(n);
}
// 문제  15
const name = prompt('이름을 입력하세요.');

console.log(`안녕하세요. 저는 ${name}입니다.`); 
// 문제  16
const n = prompt('입력하세요.');

const reverseString = n.split('').reverse().join('');
// 문제  17

const height = prompt("키를 입력하세요.");

if (height >= 150){
  console.log("YES");
} else {
  console.log("NO");
}
// 문제  18
const scores = prompt('세 과목의 점수를 입력하세요.').split(' ');
let sum = 0;

for (let i=0; i<3; i++){
  sum += parseInt(scores[i], 10); // 십진수의 형태의 숫자로 데이터 타입을 변환합니다.
}

console.log(Math.floor(sum/3)); //Math.floor 메서드는 소수점 자리를 모두 버림합니다.
// 문제  19
const n = prompt('수를 입력하세요.').split(' ');

console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));
// 문제  20
const n = prompt('수를 입력하세요.').split(' ');

const result = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10));
const left = parseInt(n[0], 10) % parseInt(n[1], 10);

console.log(result, left);
// 문제  21
3,5
// 문제  22
2
// 문제  23
x
// 문제  24

function toUpper(n){
    let result = n.toUpperCase()
    return result;
}
// 문제  25

function wide(n){
    let result = n * n * 3.14
    return result;
}
// 문제  26
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

const name = prompt("행성의 이름을 입력하세요.");

console.log(planets[name]);
// 문제  27
const keys = prompt('이름을 입력하세요').split(' ');
const values = prompt('점수를 입력하세요').split(' ');
const obj = {};

for (let i=0; i<keys.length; i++) {
  obj[keys[i]] = parseInt(values[i], 10);
}

console.log(obj);
// 문제  28
const data = prompt('문자를 입력하세요.');

for (let i=0; i<data.length-1; i++){
  console.log(data[i], data[i+1]);
}
// 문제  29
const data = prompt('알파벳을 입력하세요.');

if (data === data.toUpperCase()){
  console.log('YES');
} else {
  console.log('NO');
}
// 문제  30
const data = prompt('문자열을 입력하세요');
const word = prompt('찾을 단어를 입력하세요');

console.log(data.indexOf(word)); 

// 문제  31
3,5
// 문제  32
const string = prompt('문자열을 입력하세요.').split(' ');
console.log(string.length);
// 문제  33
const data = prompt('숫자를 입력하세요.').split(' ').reverse();
const result = '';

for (let i=0; i<data.length; i++){
  result += data[i];
}

console.log(result);
// 문제  34
const unsorted = prompt('키를 입력하세요');
let sorted = "";

sorted = unsorted
  .split(" ")
  .sort(function(a, b) {
    return a - b;
  })
  .join(" ");

if (unsorted === sorted) {
  console.log("Yes");
} else {
  console.log("No");
}
// 문제  35

function one(n) {
    function two(value) {
      const sq = Math.pow(value, n);
      return sq;
    }
    return two;
  }
  
  const a = one(2);
  const b = one(3);
  const c = one(4);
  
  console.log(a(10));
  console.log(b(10));
  console.log(c(10));