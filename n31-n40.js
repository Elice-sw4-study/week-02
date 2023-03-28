// JS 100제
// https://obsidian-scene-3ac.notion.site/JS-100-94d97d294dd14c9b911a02c840fa9f2d

//문제31
//3, 5



//문제32
let introduce = prompt().split(' ');
console.log(introduce.length);



//문제33
let num = prompt().split(' ');
num.reverse();

console.log(num.join(' '));



//문제34
let height = prompt();

let arr = height.split(' ');
let sort_arr = arr.sort().join(' ');

if (height === sort_arr)
    console.log("YES");
else
    console.log("NO");



//문제35
function one(n){
    function two(m){
        let x = Math.pow(m, n);

        return x;
    }
    return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));



//문제36
//문제37
//문제38
//문제39
//문제40