function solution(n) {
    var answer = 2;
    for(let i=2; i<Math.floor(n/2); i++){
        if(i*i===n){
            answer=1;
            break
        }
    }
    return answer;
}