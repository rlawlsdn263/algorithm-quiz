//내 코드
function findSmallestNumber(arr) {
    let answer = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(answer > arr[i]) answer = arr[i];
    }
    return answer;
}

let arr = [5, 3, 7, 11, 2, 15, 17];
findSmallestNumber(arr);

//sort를 이용한 풀이
function solution(arr) {
    arr.sort((a, b) => a - b);
   return arr[0];
   }

//정답1
function findSmallestNumber(arr) {
    let answer, min = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min) min = arr[i];
    }
    answer = min;
    return answer;
}

//정답2
function findSmallestNumber(arr) {
    let answer, min = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < min) min = arr[i];
    }
    answer = min;
    return answer;
}
