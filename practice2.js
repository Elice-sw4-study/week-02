
// 자바스크립트 문제집 Ⅱ (5)
/* 엘리스 플랫폼에서 document.write()로 작성하지만 vscode에서 실행 시 결과 확인하려면 console.log() */

// 어서오세요! 커피전문점 수타박수입니다!
// (100/100)

function solution(input) {
    var sum = 0;

    for (var i = 0; i < input.length; i++)
        if (input[i] === "아메리카노")
            sum += 4100;
        else if (input[i] === "카페라떼")
            sum += 4600;
        else if (input[i] === "카라멜마끼아또")
            sum += 5100;
  
    return sum;
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;



// 좋아하는 숫자만 골라내기
// (100/100)

function solution(input) {
    const num_tuple = ['2','3','5','6','7','8','9'];

    let str = input.replace(/[a-zA-Z]/g, "");
    let result = [];


    for (s of str) {
        if (num_tuple.includes(s))
            result.push(s);
        if (result.length === 5)
            break;
    }

  return result;
}


// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;



// 잘린 피라미드 만들기
// (100/100)

function solution(a, b) {

    var answer = '';

    if (b > 15)
        b = 15;

    if (a >= b)
        return "오류";

    if (a >= 15)
        return "오류";

    for (var i = a; i <= b; i++) {
        for(var j = 0; j < i; j++) {
            answer += '*';
        }

        if (i !== b)
            answer += '\n';
    }
    
    return answer;
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;



// 겹치는 구간 찾기
// (100/100)

function solution(input) {
    let num = input.split('\n').map(Number);
    
    var arr1 = []; //구간 A 값 저장
    var arr2 = []; //구간 B 값 저장

    var answer = []; //겹치는 구간 값 저장
    var real = []; //최종 결과값 저장

    for (var i = num[0]; i <= num[1]; i++)
        arr1.push(i);
    for (var i = num[2]; i <= num[3]; i++)
        arr2.push(i);

    // 두 배열 비교
    for (var i = 0; i < arr1.length; i++){
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j])
                answer.push(arr1[i]);
        }
    }

    if (answer.length === 0)
        return 'X';
    else if (answer.length === 2)
        return answer;
    else {
        real.push(answer[0], answer[answer.length - 1])

        return real;
    }
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;



// 괄호의 짝
// (60/100)
// 다시!
// 테스트케이스 1, 2 X

function solution(string) {
    let map = {
        '}' : '{',
        ']' : '[',
        ')' : '('
    };

    let check = string.replace(/[a-zA-Z0-9]/g, ""); //영어, 숫자 제거
    check = check.replace(/[+*\-\/]/g, ""); //특수문자 제거

    console.log(check);

    let answer = [];

    for (s of check) {
        if(s === "(" || s === "[" || s === "{")
            answer.push(s);
        else {
            let tmp = answer.pop();
            if (map[tmp] !== s)
                return "비정상";
        }
    }

    if (answer.length === 0)
        return "정상";
    else
        return "비정상";
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
//module.exports = solution;