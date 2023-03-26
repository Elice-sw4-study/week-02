// JS 100제
// https://obsidian-scene-3ac.notion.site/JS-100-94d97d294dd14c9b911a02c840fa9f2d

//문제11
let s = 0;

for (let i = 1; i <= 100; i++) {
    s += i;
}

console.log(s);



//문제12
//다시!
const Wizard = class Wizard {
    constructor (health, mana, armor) {
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }
    attack() {
        console.log("파이어볼");
    }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();



//문제13
//ReferenceError: prompt is not defined 오류나서 실행 안됨
//prompt() 입력값 문자열로 받는다고 하는데 따로 정수 변환 안해도 되는지? - 답안은 안함
var planet = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];

var y = prompt(); //입력
var num1 = Number(y);
console.log(planet[num1 + 1]);



//문제14
//ReferenceError: prompt is not defined 오류나서 실행 안됨
//prompt() 입력값 문자열로 받는다고 하는데 따로 정수 변환 안해도 되는지? - 답안은 안함
var z = prompt(); //입력
var num2 = Number(z);

if (num2 % 3 === 0) 
    console.log("짝");
else
    console.log(z);



//문제 15
//ReferenceError: prompt is not defined 오류나서 실행 안됨
var name = prompt();

console.log("안녕하세요. 저는 ${name}입니다.");



//문제 16
//ReferenceError: prompt is not defined 오류나서 실행 안됨
var word = prompt();
var reverse_word = '';

for (let i = word.length - 1; i >= 0; i--) {
    reverse_word += word[i];
}

console.log(reverse_word);



//문제 17
var height = prompt();
var num3 = Number(height);

if (num3 >= 150)
    console.log("YES");
else
console.log("NO");



//문제 18
var score = prompt().split(' ');
var sum = 0;

for (let i = 0; i < num4.length; i++) {
    re_num4[i] = parseInt(num4[i]);
    sum += re_num4[i]
}

console.log(Math.floor(sum / 3));



//문제 19
var math = prompt().split(' ');

var a = parseInt(math[0]);
var b = parseInt(math[1]);

console.log(Math.pow(a,b));



//문제 20
var num4 = prompt().split(' ');

var c = parseInt(num4[0]);
var d = parseInt(num4[1]);

var result = Math.floor(c, d);
var remain = c % d;

console.log(result, remain);