//풀이1
function rockScissorPaper(a, b) {
    let answer = [];
    for(let i = 0; i < a.length; i++) {
        if(a[i] === b[i]) answer.push('D');
        else if(a[i] === 1 && b[i] === 2) answer.push('B');
        else if(a[i] === 2 && b[i] === 3) answer.push('B');
        else if(a[i] === 3 && b[i] === 1) answer.push('B');
        else answer.push('A');
        // else if(b[i] === 1 && a[i] === 2) answer.push('A');
        // else if(b[i] === 2 && a[i] === 3) answer.push('A');
        // else if(b[i] === 3 && a[i] === 1) answer.push('A');
    }
    console.log(answer);
}

//풀이2 - switch문
function rockScissorPaper2(a, b) {
    let answer = [];
    for(let i = 0; i < a.length; i++) {
        switch(true) {
            case a[i] === b[i]: 
                answer.push('D');
                break;
            case a[i] === 1 && b[i] === 2:
            case a[i] === 2 && b[i] === 3:
            case a[i] === 3 && b[i] === 1:
                answer.push('B');
                break;
            case b[i] === 1 && a[i] === 2:
            case b[i] === 2 && a[i] === 3:
            case b[i] === 3 && a[i] === 1:
                answer.push('A');
                break;
        }
    }
    console.log(answer);
}

//해설 
function solution(a, b) {
    let answer="";
    for(let i = 0; i < a.length; i++) {
        if(a[i] === b[i]) answer += 'D ';
        else if(a[i] === 1 && b[i] === 3) answer += 'A ';
        else if(a[i] === 2 && b[i] === 1) answer += 'A ';
        else if(a[i] === 3 && b[i] === 2) answer += 'A ';
        else answer += 'B ';
    }
    console.log(answer);
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
rockScissorPaper2(a, b);
solution(a, b);