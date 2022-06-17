//풀이
function findLongestString(array) {
    let answer = '';
    for (let i = 0; i < array.length; i++) {
        if(answer.length < array[i].length) {
            answer = array[i];
        }
    }
    console.log(answer);
}

//해설
function solution(s) {
    let answer, max = Number.MIN_SAFE_INTEGER;
    for(let x of s) {
        if(x.length > max) {
            max = x.length;
            answer = x;
        }
    }
    console.log(answer);
}

let array = ["teacher", "time", "student", "beautiful", "good"];
findLongestString(array);
solution(array);