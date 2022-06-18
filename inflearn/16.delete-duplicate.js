//풀이
function deleteDuplicate(str) {
    let answer = '';
    if(str !== str.toLowerCase()) {
        console.log('Lowercase Only!');
        return;
    }

    for(let i = 0; i < str.length; i++) {
        if(i === str.indexOf(str[i]))
        answer += str[i];
        }
    console.log(answer);
}


//해설 
function solution(s) {
    let answer = "";
    for(let i = 0; i<s.length; i++) {
            if(s.indexOf(s[i]) === i) answer += s[i];
    }
    console.log(answer);
}

//해설2 - 특정 문자 갯수 구하기
function solution2(s) {
    let answer = 0;
    let pos = s.indexOf('k');
    while(pos !== -1) {
        answer++;
        pos = s.indexOf('k', pos + 1);
    }
    console.log(answer);
}

let str = 'ksekkset';
solution2(str);