function solution(my_string) {
    var answer = 0;
    for(let x of my_string){
        if(!isNaN(x))answer+=Number(x)
    }
    return answer;
}