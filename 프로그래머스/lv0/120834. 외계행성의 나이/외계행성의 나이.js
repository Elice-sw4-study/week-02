function solution(age) {
    return String(age).split('').map(ele => String.fromCharCode(Number(ele) + 97)).join('');
}