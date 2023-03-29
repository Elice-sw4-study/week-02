// JS 100제
// https://obsidian-scene-3ac.notion.site/JS-100-94d97d294dd14c9b911a02c840fa9f2d

//문제21
//3, 5



//문제22
//2


//문제 23
//X



//문제 24
var name = prompt();

console.log(name.toUpperCase());



//문제 25
var r = prompt();
var num5 = parseInt(r);

console.log(num5 ** 2 * Math.PI);



//문제 26
const planet2 = {
	'수성' : 'Mercury',
	'금성' : 'Venus',
	'지구' : 'Earth',
	'화성' : 'Mars',
	'목성' : 'Jupiter',
	'토성' : 'Saturn',
	'천왕성' : 'Uranus',
	'해왕성' : 'Neptune',
};

const name = prompt();
console.log(planet2[name]);



//문제 27
let keys = prompt().split(" ");
let values = prompt().split(" ");
let dict = {};

for (let i = 0; i < keys.length; i++) {
	dict[keys[i]] = parseInt(values[i])
}

console.log(dict);



//문제 28
let word = prompt().split('');

for (let i = 0; i < word.length - 1; i++) {
	console.log(word[i], word[i + 1]);
}



//문제 29
let english = prompt();

if (english === english.toUpperCase()) 
	console.log("YES")
else
	console.log("NO");



//문제 30
let sentence = prompt();
let find = prompt();

console.log(sentence.indexOf(find))