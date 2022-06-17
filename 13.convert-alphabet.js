//풀이
function convertAlphabet(str) {
    let answer = '';
    for(let letter of str) {
        if(letter === letter.toUpperCase()) answer += letter.toLowerCase();
        else answer += letter.toUpperCase();
    }
    console.log(answer);
}

//해설 
function solution(s) {
    let answer = '';
    for(let x of s){
        if(x === x.toUpperCase()) answer += x.toLowerCase();
        else answer += x.toUpperCase();
    }
    console.log(answer);
}

let str = "StuDY";
solution(str);
