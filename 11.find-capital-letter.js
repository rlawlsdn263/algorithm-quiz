//풀이
//https://bobbyhadz.com/blog/javascript-find-all-uppercase-characters-in-string
function findCapitalLetter(str) {
    let answer = str.match(/[A-Z]/g).length;
    console.log(answer);
}


//풀이2
//https://javascript.plainenglish.io/create-an-array-of-alphabet-characters-in-javascript-with-this-simple-trick-930033079dd3
function findCapitalLetter2(str) {
    let answer = 0;
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    for(letter of str) {
        if(alphabet.includes(letter)) {
            answer++;
        }
    }
    console.log(answer);
}

//풀이3
function findCapitalLetter3(str) {
    let answer = 0;
    for(letter of str) {
        if(letter === letter.toUpperCase()) answer++;
    }
    console.log(answer);
}

//해설 - .toUpperCase
function solution(s) {
    let answer = 0; 
    for(let x of s) {
        if(x === x.toUpperCase()) answer++;
    }
    console.log(answer);
}

//해설2 - ASCII 코드 비교
//대문자 알파벳: 65 ~ 90
//소문자 알파벳: 97 ~ 122
function solution2(s) {
    let answer = 0;
    for(let x of s){
        let num = x.charCodeAt();
        if(num >= 65 && num <= 90) answer++;
    }
    console.log(answer);
}

let str = "KoreaTimeGood";
solution2(str);