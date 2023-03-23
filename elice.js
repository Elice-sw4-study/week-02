// 어서오세요! 커피전문점 수타박수입니다!
function solution(input) {
  let ret = 0;  
  for(i of input){
      if(i === '아메리카노') ret += 4100
      else if(i === '카페라떼') ret += 4600
      else ret += 5100
  }
  return ret
}


// 좋아하는 숫자만 골라내기
function solution(input) {
  const num_tuple = ['2','3','5','6','7','8','9'];
  let ret = input.split('').filter(v => num_tuple.includes(v)).slice(0, 5)
  return ret;
}


// 잘린 피라미드 만들기
function solution(a, b) {
  if(a >= 15 || a >= b){
      return '오류'
  }
  let ret = ''
  for(let i = a; i <= b && i <= 15; i++){
      for(let j = 1; j <= i; j++){
          ret += '*'
      }
      ret += '\n'
  }
  return ret.slice(0, ret.length-1)
}


// 겹치는 구간 찾기
function solution(input) {
  const ret = input.split('\n')
  const Al = +ret[0]
  const Ar = +ret[1]
  const Bl = +ret[2]
  const Br = +ret[3]

  if(Ar < Bl || Br < Al) return 'X'

  if(Math.max(...ret) === Ar) return Al < Bl ? [Bl, Br] : [Al, Br]
  else if(Math.max(...ret) === Br) return Al < Bl ? [Bl, Ar] : [Al, Br]
}


// 괄호의 짝
function solution(string) {
  const pair = string.split('').filter(v => ['(', ')', '{', '}', '[', ']'].includes(v))
  let ret = [];
  for(let i = 0; i < pair.length; i++){
      if(pair[i] === '(' || pair[i] === '{' || pair[i] === '['){
          ret.push(pair[i])
      }else{
          if(pair[i] === ')' && ret.includes('(')){
              ret.pop(pair[i])
          }else if(pair[i] === '}' && ret.includes('{')){
              ret.pop(pair[i])
          }else if(pair[i] === ']' && ret.includes('[')){
              ret.pop(pair[i])
          }else{
              return '비정상'
          }
      }
  }
  return ret.length >= 1 ? '비정상' : '정상'
}

