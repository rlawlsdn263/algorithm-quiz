//https://stackoverflow.com/questions/14247140/removing-numbers-and-characters-from-a-string
//알파벳을 제외한 특수 문자, 숫자 제거해줌
// var letters = str.replace(/[^A-Za-z]+/g, '');

//풀이
function palindrome(str) {
    let answer = "YES";
    let alphbetsOnly = str.toLowerCase().replace(/[^A-Za-z]+/g, '');
    for(let i = 0; i < alphbetsOnly.length; i++) {
        if(alphbetsOnly[i] !== alphbetsOnly[alphbetsOnly.length - i - 1]) answer = "NO";
    }
    console.log(answer, alphbetsOnly);
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
palindrome(str);

//해설
function solution(s) {
    let answer = "YES";
    //소문자 a - z가 아닌 것들
    s = s.toLowerCase().replcae(/[^a-z]/g, '');
    if(s.split('').reverse().join('') !== s) return "NO";
    return answer;
}