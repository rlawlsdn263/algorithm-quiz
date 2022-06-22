//풀이
function compress(s) {
    let answer = '', count = 1;
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== s[i+1] && s[i] !== s[i-1]) {
            answer += s[i];
            count = 1;
        } else if(s[i] === s[i+1]) {
            count++;
        } else {
            answer += s[i] + count; 
            count = 1;
        }
    }
    console.log(answer);
}

//해설
function solution(s) {
    let answer = "";
    let cnt = 1;
    s = s + " ";
    for(let i = 0; i < s.length - 1; i++) {
        if(s[i] === s[i+1]) cnt++;
        else {
            answer += s[i];
            if(cnt > 1) answer += String(cnt);
            cnt = 1;
        }
    }
    console.log(answer);
}

let s = 'KKHSSSSSSSE';
solution(s);