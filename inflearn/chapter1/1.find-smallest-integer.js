//코드1
// function findSmallestInt(arr) {
//     let answer;
//     let min = Number.MAX_SAFE_INTEGER;
//     for (x of arr) {
//         if(x < min) min = x;
//     }
//     answer = min;
//     return answer;
// }

//코드2
// function findSmallestInt (arr) {
//     let answer;
//     answer = Math.min(...arr);
//     return answer;
// };

//코드3
// function findSmallestInt(arr) {
//     let answer;
//     let sort = arr.sort((a, b) => {
//         return a - b;
//     });
//     answer = sort[0];
//     return answer;
// }

//정답
function findSmallestInt(a, b, c) {
    let answer;
    if (a < b) answer = a;
    else answer = b;
    if (c < answer) answer = c;
    
    return answer;
}

findSmallestInt(6, 5, 11);