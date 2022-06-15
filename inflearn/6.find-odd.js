//7개의 자연수 중의 홀수들만 골라 그 합을 구하고
//골라진 홀수들 중의 최솟값을 구하라
//Expected Output: 256 41

let arr = [12, 77, 38, 41, 53, 92, 85];

function solution(arr) {
    let answer = [];
    let odd_sum = 0, odd_array = [];
    arr.forEach(item => {
        if(item % 2 !== 0) {
            odd_array.push(item);
            odd_sum += item;
        }
    })
    answer.push(odd_sum);
    answer.push(Math.min(...odd_array));
    return answer;
}

solution(arr);

//정답
function solution(arr) {
    let answer = [];
    let sum = 0, min = Number.MAX_SAFE_INTEGER;
    for (let x of arr) {
        //홀수만 찾아서 sum에 더하기
        if (x % 2 === 1) {
            sum += x;
            //x와 min을 비교해 min보다 더 작은 x를 min으로 대체시킨다
            if (x < min) min = x;
        }
    }
    answer.push(sum);
    answer.push(min);
    return answer;
}


