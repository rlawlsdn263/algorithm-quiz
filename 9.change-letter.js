//풀이
function changeLetter(str) {
    let answer = '';
    for (letter of str) {
        if(letter === 'A') {
            letter = '#';
        }
        answer += letter;
    }
    return answer;
}

//해설
function solution(s) {
    let answer = "";
    for(let x of s) {
        if(x==='A') answer += '#';
        else answer += x;
    }
    return answer;
}

//해설2
function solution2(s) {
    let answer = s;
    answer = answer.replace(/A/g, '#');
    console.log(answer);
}

let str = "BANANA";
changeLetter(str);
solution(str);
solution2(str);