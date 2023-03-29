// JS 100제
// https://obsidian-scene-3ac.notion.site/JS-100-94d97d294dd14c9b911a02c840fa9f2d

//문제1
var nums = [100, 200, 300, 400, 500];
var del = [400, 500];

for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < del.length; j++){
        if (nums[i] === del[j])
            nums.splice(i, 1);
    }
}

console.log(nums);



//문제2
var arr = [200, 100, 300];

arr.splice(2, 0, 10000);

console.log(arr);



//문제3
//4



//문제4
//2



//문제5
//4



//문제6
//2



//문제7
//3, 5
//JavaScript 식별자는 문자, 밑줄(_) 혹은 달러 기호($)로 시작



//문제8
//4
//키 내부에서 중복되는 이름이 있을 경우 자바스크립트는 맨 뒤에 적은 것을 값으로 연결



//문제9
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = year

console.log(result);


// 출력
// 2019/04/26 11:34:27



//문제 10
for(let i = 0; i < 5; i++) {
    for (let j = 4; j > i; j--) {
        //console.log('&nbsp');
        process.stdout.write(' ');
    }
    for (let j = 0; j <= i; j++) {
        //console.log('*');
        process.stdout.write('*');
    }
    for (let j = 0; j < i; j++) {
        //console.log('*');
        process.stdout.write('*');
    }

    console.log();
}

//process.stdout.write() : 줄바꿈없이 터미널에 출력