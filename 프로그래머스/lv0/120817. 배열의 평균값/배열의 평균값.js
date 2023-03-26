function solution(numbers) {
    var answer = 0;
    for(let x of numbers){
        answer+=x;
    }
    answer=answer/numbers.length
    return answer;
}