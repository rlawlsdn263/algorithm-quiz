//풀이 
function substring(str) {
    let answer;
    if(str === str.toUpperCase()) return;
    for (let i = 0; i < str.length; i++) {
        if(str.length % 2 == 1) {
            answer = str[Math.ceil(str.length/2) - 1];
        } else answer = str[Math.ceil(str.length/2) - 1] + str[Math.ceil(str.length/2)];
    }
    console.log(answer);
}

//해설 - substring()
function solution(s) {
    let answer;
    let mid = Math.floor(s.length/2);
    if(s.length % 2 == 1) answer = s.substring(mid, mid + 1);
    else answer = s.substring(mid - 1, mid + 1); 

    console.log(answer);
}

//해설2 - substr
function solution2(s) {
    let answer;
    let mid = Math.floor(s.length/2);
    if(s.length % 2 == 1) answer = s.substr(mid, 1);
    else answer = s.substr(mid - 1, 2); 

    console.log(answer);
}

let str = '';
substring(str);
solution2(str);