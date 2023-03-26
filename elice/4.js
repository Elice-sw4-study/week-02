//겹치는 구간 찾기
function solution(input) {
    let A=[]
    let B=[]
    let answer =[]
    const [Amin, Amax, Bmin, Bmax] = input.split('\n')

     for(let i=Amin; i<=Amax; i++) A.push(Number(i))
     for(let j=Bmin; j<=Bmax; j++) B.push(Number(j))

    A.filter((i)=>{
         for(let j of B){
             if (i===j) answer.push(i) 
         }
     })

     result = [answer[0], answer[answer.length-1]]
     if (answer.length === 0) result='X'

     return result
}ㄴ