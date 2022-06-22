//풀이
function scoreCount(arr) {
    let answer = 0, count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i - 1] == true && arr[i] == true) {
            answer += count;
        }        
        if(arr[i] == false) {
            count = 0;
        } else {
            count++;
            answer++;
        } 
    }
    console.log(answer);
}

//해설 
function solution(arr) {
    let answer = 0, cnt = 0;
    for(let x of arr) {
        if(x === 1) {
            cnt++;
            answer+=cnt;
        }
        else cnt = 0;
    }
    console.log(answer);
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1];
// scoreCount(arr);
solution(arr);