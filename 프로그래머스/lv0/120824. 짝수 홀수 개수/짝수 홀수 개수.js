function solution(num_list) {
    var answer = [];
    let a=0;
    let b=0;
    for(let x of num_list){
        if(x%2===0){
            a++
        }
        else b++
    }
    answer.push(a)
    answer.push(b)
    return answer;
}