//괄호의 짝 ㅜㅜ..
function solution(string) {
    const reg_s = /[?.,;:|*~`!^_+<>@$%&"]/gi;
    const reg_e = /[a-zA-Z ]/gim;
    let str1 = string.replace(reg_s,''); //특수문자 제거
    let str = str1.replace(reg_e,''); //영어 제거

    /*





    */
    

  return str;
}