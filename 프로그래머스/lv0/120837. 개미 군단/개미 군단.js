function solution(hp) {
    var answer = 0;
    let tmp=hp
    answer+=Math.floor(tmp/5)
    tmp=tmp%5
    
    answer+=Math.floor(tmp/3)
    tmp=tmp%3
    
 
    answer+=tmp
    
    return answer;
}