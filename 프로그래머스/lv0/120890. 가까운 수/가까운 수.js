function solution(array, n) {
    var answer = array.sort((a,b) => Math.abs(a - n) - Math.abs(b - n))
   return Math.abs(answer[0] - n) === Math.abs(answer[1] - n) ?
       Math.min(answer[0],answer[1]) : answer[0]
       
}