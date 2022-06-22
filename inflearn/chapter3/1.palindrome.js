//풀이
function palindrome(str) {
    let answer = "YES", p = '';
    for (let l of str) {
        p = l + p;
    }
    if(str.toUpperCase() !== p.toUpperCase()) {
        answer = "NO";
    }
    console.log(p);
    console.log(answer);
}

//풀이2
function palindrome2(str) {
    let answer = "", p = str.toLowerCase();
    for(let i = 0; i < p.length; i++) {
        answer += p[p.length - i - 1]
    }
    if(answer === p) console.log('YES');
    else console.log("NO!"); 
}

//해설
function solution(s) {
    let answer = "YES";
    s = s.toLowerCase();
    let len = s.length;
    for(let i = 0; i < Math.floor(len/2); i++) {
        if(s[i] !== s[len - i - 1]) return "NO";
    }
    return answer;
}

//해설2
function solution(s) {
    let answer = "YES";
    s = s.toLowerCase();
    if(s.split('').rever().join('') !== s) return "NO";
    return answer;
}

let str = "gooG";