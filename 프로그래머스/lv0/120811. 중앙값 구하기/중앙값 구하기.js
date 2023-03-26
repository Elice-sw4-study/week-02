function solution(array) {

    let answer=array.sort((a,b)=>a-b)
    let midindex=parseInt((array.length)/2)
    return answer[midindex];
}