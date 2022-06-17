//풀이1
// function sevenDwarves(arr) {
//     let answer = [];
//     let totalHeight = 0;
//     for (item of arr) {
//         totalHeight += item;
//     }
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === totalHeight - 100) {
//                 answer = arr.filter(item => item !== arr[i] && item !== arr[j]);
//             }
//         }
//     }
//     console.log(answer);
// }

//정답 
//답에 오류가 있음 확인할 것
function solution(arr) {
    let answer = arr;
    let sum = arr.reduce((a, b) => a + b, 0);
    for(let i = 0; i < 8; i++) {
        for(let j = 1 + 1; j < 9; j++) {
            if((sum - (arr[i] + arr[j])) === 100) {
                arr.splice(j, 1);
                arr.splice(i, 1);
            }
        }
    }
    console.log(answer);
    return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
solution(arr);