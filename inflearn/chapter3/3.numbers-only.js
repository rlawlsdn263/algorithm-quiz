//풀이
// parseInt(s.toLowerCase().replace(/[a-z]/g, ''));

function numbersOnly(s) {
    let answer = parseInt(s.toLowerCase().replace(/[a-z]/g, ''))
    console.log(answer);
}

//해설1
function solution(s) {
    let answer = '';
    for(let x of s) {
        if(!isNaN(x)) answer += x;
    }
    console.log(parseInt(answer));
}

//해설2
function solution2(s) {
    let answer = 0;
    for(let x of s) {
        if(!isNaN(x)) answer = answer * 10 + Number(x);
    }
    console.log(answer);
}

let s = 'g0en2T0s8eSoft';
solution2(s);

