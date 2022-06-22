//풀이
function distance(s, t) {
    let answer = [], p = 1000, len = s.length;
    for(let i = 0; i < len; i++) {
        if(s[i] === t) {
            p = 0;
            answer.push(p);
        } else {
            p ++;
            answer.push(p);
        }
    }

    for(let i = len - 1; i >= 0; i-- ) {
        if(s[i] === t) {
            p = 0;
            if(answer[i] > p) answer[i] = p;
        } else {
            p++;
            if(answer[i] > p) answer[i] = p;
        }
    }
    console.log(answer);
}

//해설
function solution(s, t) {
    let answer = [];
    let p = 1000;
    //우측으로 거리 계산
    for(let x of s) {
        if(x === t) {
            p = 0;
            answer.push(p);
        } else {
            p++;
            answer.push(p);
        }
    }

    //좌측으로 거리 계산
    p = 1000;
    for(let i = s.length - 1; i >= 0; i--) {
        if(s[i] === t) {
            p = 0;
        } else {
            p++;
            answer[i] = Math.min(answer[i], p);
        }
    }
    console.log(answer);
}

let s = 'teachermode', t = 'e';
solution(s, t)