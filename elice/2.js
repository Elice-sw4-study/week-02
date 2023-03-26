//좋아하는 숫자만 골라내기
function solution(input) {
    const num_tuple = ['2','3','5','6','7','8','9'];
  
    let nums = []
    for(let e of input) {
        for (let num of num_tuple){
            if(e===num) nums.push(num)
        }
    }
  
    if(nums.length>5) return nums.slice(0,5)
    return nums
  }