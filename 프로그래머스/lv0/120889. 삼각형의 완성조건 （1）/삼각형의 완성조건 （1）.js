function solution(sides) {
    var answer = 0;
    let sum=0
    for(let i=0; i<sides.length; i++){
        sum+=sides[i]
    }
    let max=Math.max(...sides)

    if(sum-max>max)answer=1
    else answer=2
    
    return answer;
}