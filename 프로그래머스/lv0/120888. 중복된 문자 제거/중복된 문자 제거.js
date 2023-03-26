function solution(my_string) {
    
    let answer=[...my_string];
    answer=Array.from(new Set(answer))
    return answer.join("")
}