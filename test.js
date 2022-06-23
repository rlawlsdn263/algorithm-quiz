'use strict';

function solution(num) {
    let answer = [];
    for(let x of num) {
        let flip = parseInt(x.toString().split('').reverse().join(''));
        if (flip <= 1) return false;
        if (flip === 2) answer.push(flip);
        for (let i= 2; i < flip; i++) { 
            if (flip % i === 0) {
                return false;
            }
         }
         answer.push(flip);
    }
    console.log(answer);
}

let num = [32, 55, 62, 20, 250, 370, 200, 30, 100];
solution(num);