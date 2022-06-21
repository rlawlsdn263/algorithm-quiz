//풀이
function printBigNumber(arr) {
    let answer = [];
    answer.push(arr[0]);
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j <= i + 1; j++) {
            if(arr[i] < arr[j]) {
                answer.push(arr[j]);
            }
        }
    }
    console.log(answer);
}

let arr = [7, 3, 9, 5, 6, 12];
printBigNumber(arr);

//해설
function solution(arr) {
    let answer = [];
    //첫 번째 숫자는 넣어준다
    answer.push(arr[0]);
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i - 1]) answer.push(arr[0]);
    }
}

//해설2 - reduce를 이용한 코드
function solution2(arr) {
    let answer = [];
    arr.reduce((prev, cur) => {
        if (prev < cur) answer.push(cur);
        return cur;
    }, 0);
    return answer;
}

solution(arr);