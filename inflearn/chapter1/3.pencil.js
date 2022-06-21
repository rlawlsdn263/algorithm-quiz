//코드
function pencil(n) {
    let answer, p = 12;
    if(n < p) {
        answer = 1;
    };
    
    if(n % p !== 0) {
        answer = Math.floor(n / p) + 1;
        // answer = Math.ceil(n/p)
    } else {
        answer = n / p;
    } 

    return answer;
}

//정답
function pencil(n) {
    let answer = Math.ceil(n/12);
    return answer;
}

let n = 25;
pencil(n);