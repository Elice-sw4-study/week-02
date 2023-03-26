//잘린 피라미드 만들기 (testcase 4번 틀림)
function solution(a, b) {
    answer=[]

    for(let i=a; i<=b; i++){
        if (i>15) break
        answer.push('*'.repeat(i))
    }

  if(a>=b) result = '오류'
  else result = answer.join('\n')

  return result
}
