//코드1
// function checkTriangle(a, b, c) {
//     let answer;
//     let nums = [a, b, c];
//     let sort = nums.sort((a, b) => {
//         return a - b;
//     })
//     if(sort[0] + sort [1] > sort[2]) answer = 'Yes';
//     else answer = 'No';
    
//     return answer;
// };

//코드2
// function checkTriangle(a, b, c) {
//     let answer;
//     if (a + b > c && b + c > a && c + a > b) answer = 'YES!';
//     else answer = 'NO!'; 
//     return answer;
// }

// checkTriangle(6, 7, 11);

//정답
function checkTriangle(a, b, c) {
    let answer = "YES", max;
    let sum = a + b + c;
    if(a > b) max = a;
    else max = b;
    if(c > max) max = c;
    if((sum - max) <= max) answer = "NO";
    return answer;
}