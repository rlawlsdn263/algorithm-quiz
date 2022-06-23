//풀이 - 실패
function biggestSum(arr) {
    let answer = 0; 
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        let num = arr[i].toString(); //'128'
        for(let j = 0; j < num.length; j++) {
            sum += parseInt(num[j]);
        }
        if(sum > max) {
            max = sum;
            answer = arr[i];
        } 
        sum = 0;
    }
    console.log(answer);
}

//풀이 - while문
function solution(arr) {
    let answer, max = Number.MIN_SAFE_INTEGER;
    for(let x of arr) {
        let sum = 0;
        let tmp = x;
        while(tmp) {
            sum += (tmp % 10);
            tmp = Math.floor(tmp / 10);
        }
        if(sum > max) {
            max = sum;
            answer = x;
        }
        else if(sum === max) {
            if(x > answer) answer = x;
        }
    }
    console.log(answer);
}


//풀이 - 내장함수
function solution2(arr) {
    let answer, max = Number.MIN_SAFE_INTEGER;
    for(let x of arr) {
        let sum = x.toString().split('').reduce((a, b) => a + Number(b), 0);
        if(sum > max) {
            max = sum;
            answer = x;
        }
        else if(sum === max) {
            if(x > answer) answer = x;
        }
    }
    console.log(answer);
}

let arr = [128, 460, 603, 40, 521, 137, 123];
solution(arr);