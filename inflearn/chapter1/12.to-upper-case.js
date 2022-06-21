//풀이
function changeToCapital(str) {
    let answer = str.toUpperCase();
    console.log(answer);
}

//풀이2
function changeToCapital2(str) {
    let answer = '';
    for(letter of str) {
        if(letter !== letter.toUpperCase) {
            letter = letter.toUpperCase();
            answer += letter;
        }
    }
    console.log(answer);
}

//풀이3
function changeToCapital3(str) {
    let answer = '';
    for(letter of str) {
        let num = letter.charCodeAt();
        if(num >= 97 && num <= 122) {
            letter = letter.toUpperCase();
            answer += letter;
        } else {
            answer += letter;
        }
    }
    console.log(answer);
}

//해설
function solution(s) {
    let answer = '';
    for(let x of s) {
        if(x === x.toLowerCase()) answer += x.toUpperCase();
        else answer += x;
    }
    console.log(answer);
}

//해설2 
function solution2(s) {
    let answer = '';
    for(let x of s) {
        let num = x.charCodeAt();
        if(num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
        else answer += x;
    }
    console.log(answer);
}

let str = 'ItisTimetoStudy';
solution2(str); 