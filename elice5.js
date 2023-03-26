//1. 어서오세요! 커피전문점 수타박수입니다!
function solution(input) {
    let answer = 0;
    for(let i=0; i<input.length; i++) {
        if(input[i] === '아메리카노') {
            answer += 4100
        } else if ( input[i] === '카페라떼' ) {
            answer += 4600
        } else {
            answer += 5100
        }
    }
    return answer;
}

//2. 좋아하는 숫자만 골라내기
function solution(input) {
    const num_tuple = ['2', '3', '5', '6', '7', '8', '9'];
    let arr = [];
    for (i = 0; i < input.length; i++) {
        for (j = 0; j < num_tuple.length; j++) {
            if (input[i] == num_tuple[j]) {
                arr.push(num_tuple[j]);
            }
        }
    }
    if (arr.length > 4) {
        arr.splice(5, arr.length - 1);
    }
    return arr;
}

// 3~5번을 못풀었습니다ㅠ