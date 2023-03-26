//문제1 : 배열의 삭제 - 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
var nums = [100, 200, 300, 400, 500];
nums.pop();
nums.pop();
console.log(nums); //[ 100, 200, 300 ]

//문제2 : 배열의 내장함수 - <pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.
var arr = [200, 100, 300];
//pass
arr.splice(2, 0, 10000);
console.log(arr);

//문제3 : 변수의 타입 - 다음 출력 값으로 올바른 것은? 
var arr = [100, 200, 300];
console.log(typeof(arr)); //답 : object

//문제4 : 변수의 타입2 - 다음 변수 a를 `typeof(a)`로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?
//답 : 2)  입력 : a = 2.22,   출력 : boolean -> number로 출력된다

//문제5 : for문 계산 - 다음 코드의 출력 값으로 알맞은 것은?
var a = 10;
var b = 2;
for(var i=1; i<5; i+=2){
    a += i;
}
console.log(a+b); //답 : 16

//문제6 : False - 다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다. 앗, False로 취급하지 않는 것이 하나 있네요! True를 찾아주세요.
//답 : 1 -> 1은 ture 0이 false

//문제7 : 변수명 - 다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.
//답 : let, 1age -> let은 이미 있는 문자열, 변수명은 숫자로 시작할 수 없다.

//문제8 : 객체의 키 이름 중복 - 자바스크립트 객체를 다음과 같이 만들었다. 출력값을 입력하시오. (출력값은 공백을 넣지 않습니다.)
var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
};
console.log(d['weight']); //답 : 84

//문제9 : concat을 활용한 출력 방법 - 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';
var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);
console.log(result);

//문제10 : 별 찍기 - 입력 5, 별의 최대 개수 9개. 별의 개수는 1-3-5-7-9로 2개씩 증가
let starArr = [];
function starTree(input) {
    for (var i = 1; i <= 9; i = i + 2) {
        starArr.push(" ".repeat((9 - i) / 2) + "*".repeat(i));
        // 공백의 수는 4 -> 3 -> 2 -> 1 로 (9-i)/2 를 적용해준다.
    }
    return starArr.join('\n');
}
console.log(starTree(5));

//문제11 : for를 이용한 기본 활용 - 1부터 100까지 모두 더하는 Code를 <pass> 부분에 완성하세요. `for`를 사용해야 합니다.
let s = 0;
for (let i=1; i<=100; i++){
    s += i;
  }
console.log(s);

//문제12 : 게임 캐릭터 클래스 만들기 - 다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오.
//**주어진 소스 코드를 수정해선 안됩니다.**
class Wizard {
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

//문제13 : 몇 번째 행성인가요? - 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다.
//수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성 / 입력 : 1 출력 : 수성
const planetList = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
const planetNum = 1;
console.log(`입력 : ${planetNum}\n출력 : ${planetList[planetNum-1]}`);

//문제14 : 3의 배수 인가요? -  3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력
const three = 6;
if (three % 3 == 0) {
    console.log(`입력 : ${three}\n출력 : 짝`);
} else if (three % 3 != 0) {
    console.log(`입력 : ${three}\n출력 : ${three}`);
}

//문제15 : 자기소개 - 만약 입력으로 김다정이라는 이름이 주어지면 "안녕하세요. 저는 김다정입니다."라고 출력
const inputName = "김다정";
console.log(`안녕하세요. 저는 ${inputName}입니다.`);

//문제16 : 로꾸거 - 문장이 입력되면 거꾸로 출력하는 프로그램
const stringRev = "거꾸로";
console.log(stringRev.split('').reverse().join(''));

//문제17 : 놀이기구 키 제한 - 키가 150이 넘으면 YES를 틀리면 NO
const tall = 150;
if(tall>=150) {
    console.log('YES');
} else if (tall<150) {
    console.log('NO');
}

//문제18 : 평균 점수 - 공백으로 구분, 전체 평균 점수를 구하는 프로그램을 작성하세요. 단, 소숫점 자리는 모두 버립니다.
const scores = "20 30 40"; //문자로 받는게 맞나?
let score = scores.split(' ');
let sum = 0;
for (let i = 0; i < score.length; i++) {
    sum = sum + parseInt(score[i]);
}
console.log(Math.floor(sum/3));


//문제19 : 제곱을 구하자 - 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성
const sq = "10 2";
let AsqB = sq.split(' ');
console.log(`${AsqB[0]}의 ${AsqB[1]}승은 ${Math.pow(AsqB[0], AsqB[1])}`);

//문제20 : 몫과 나머지 - 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력
const q20 = ("10 2").split(' ')
let share = Math.floor(parseInt(q20[0]) / parseInt(q20[1])); //몫
let remainder = q20[0]%q20[1]; //나머지
console.log(share, remainder);

//문제21 : set은 어떻게 만드나요?
//답 : var x = new Set('javascript'); var x = new Set();

//문제22 : 배수인지 확인하기 - 다음 중 변수 i가 6의 배수인지 확인하는 방법으로 올바른 것은?
//답 : i%6 == 0

//문제23 : OX문제 - console.log(10/3)의 출력 결과는 3이다.
//답 : x 3.3333333333333335이 나온다

//문제24 : 대문자로 바꿔주세요! - 이름이 입력되면 전부 대문자로 출력되는 프로그램을 만들어주세요.
const nameUpper = "mingi";
console.log(nameUpper.toUpperCase());

//문제25 : 원의 넓이를 구하세요 - 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 <함수>를 만들어 주세요.
//원의 넓이는 반지름의 길이 x 반지름의 길이 x 3.14로 구할 수 있습니다.
function radius(n){
    let circle = n * n * 3.14;
    return circle;
}
console.log(radius(7));

//문제26 : 행성 문제2 - 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.
const planetER = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
const planetKR = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
function changelang(kr) {
    for (let o = 0; o < planetKR.length; o++) {
        if ( planetKR[o] === kr ) {
            return `행성의 한글 이름은 ${kr}이고, 행성의 영어 이름은 ${planetER[o]}입니다.`;
        }
    }
}
console.log(changelang('목성'));
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
console.log(planets['해왕성']);

//문제27 : 객체 만들기 - 학생의 이름이 key이고 value가 수학 점수인 객체를 출력
//첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.
const keys = ('Yujin Hyewon').split(' ');
const values = ('70 100').split(' ');
const obj = {};
for (let i=0; i<keys.length; i++) {
  obj[keys[i]] = parseInt(values[i]);
}
console.log(obj);

//문제28 : 2-gram - 입력으로 문자열이 주어지면 2-gram으로 출력하는 프로그램을 작성해 주세요.
function twoGram(input) {
    const arr = input.split('');
    let result = [];
    for (let i = 0; i < input.length - 1; i++) {
        result.push(arr[i] + ' ' + arr[i + 1]);
    }
    return result.join('\n');
}
console.log(twoGram('Javascript'));

//문제29 : 대문자만 지나가세요 - 알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램
const alp = "a";
if(alp.toUpperCase() === alp) {
    console.log('YES');
} else {
    console.log('NO');
}

//문제30 : 문자열 속 문자 찾기 -  문자가 시작하는 index를 반환하는 프로그램
//입력 pineapple is yummy ,apple 출력 4
const long = 'pineapple is yummy';
const short = 'apple';
console.log(long.indexOf(short)); 
//* indexOf() : 호출한 스트링 객체나 배열에서 주어진 값과 일치하는 값 혹은 요소의 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환

//문제31 : 자바스크립트 자료형의 복잡도 - 다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오.
//답 : arr.slice(), arr.includes(5)
//해설 : arr.slice() : 새로운 배열을 반환하므로 원래 배열의 크기에 관계없이 반환할 새 배열의 크기에 따라 시간 복잡도가 결정된다.
//해설 : arr.includes(5) : 배열의 모든 요소를 순회하며 찾는 요소가 있는지 확인해야 하므로 배열의 크기에 비례하는 시간이 소요된다.

//문제32 : 문자열 만들기 - 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램
const data = '안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.';
console.log(`단어의 갯수 : ${data.split(' ').length}`);

//문제33 : 거꾸로 출력하기 - 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.
const q33 = '2 4 6 7 8';
const revNum = q33.split('').reverse().join('');
console.log(revNum);

//문제34 : sort 구현하기 - 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램
const height = '176 156 155 165 166 169';
const noHeight = height.split(' ');
const yesHeight = [...noHeight].sort(); //전개 연산자로 noHeight배열의 모든 요소를 새로운 배열에 넣고 sort();
if(JSON.stringify(noHeight) === JSON.stringify(yesHeight)) {
    //JSON.stringify() : 자바스크립트 객체나 배열을 JSON문자열로 변환하는 메소드
    console.log('yes')
} else {
    console.log('NO')
}


//문제35 : Factory 함수 사용하기 - 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다. <pass>에 코드를 작성하여 two함수를 완성하세요.
function one(n){
    function two(x){
        return Math.pow(x, n);
    }
    return two;
}

const aa = one(2);
const bb = one(3);
const cc = one(4);

console.log(aa(10));
console.log(bb(10));
console.log(cc(10));
