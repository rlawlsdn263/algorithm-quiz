//풀이
function findString(s, t) {
    let answer = 0;
    for (letter of str) {
        if(letter === t) answer += 1;
    }
    console.log(answer);
}

//해설
function solution(s, t) {
    let answer = 0;
    for(let x of s) {
        if(x === t) answer ++;
    }
    console.log(answer);
}

//해설2
function solution2(s, t) {
    let answer = s.split(t).length;
    console.log(answer -1 );
}

let str = "COMPUTERPROGRAMMING";
findString(str, 'R');
solution(str, 'R');
solution2(str, 'R');
