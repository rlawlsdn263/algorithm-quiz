// 자연수가 들어있는 배열 arr가 매개변수로 주어집니다. 
// 배열 arr안의 숫자들 중에서 앞에 있는 숫자들부터 뒤에 중복되어 나타나는 숫자들 중복 횟수를 계산해서 배열로 return 하도록 solution 함수를 완성해주세요. 
// 만약 중복되는 숫자가 없다면 배열에 -1을 채워서 return 하세요.

//풀이
function solution(arr) {
    let answer = [];
    let count = 0;
    let sortedArr = arr.sort((a, b) => a - b);
    for(let i = 0; i < sortedArr.length; i++) {
        if(sortedArr[i] === sortedArr[i + 1]) {
            count++;
            if(sortedArr[i] !== sortedArr[i + 2]) {
                answer.push(count + 1);
                count = 0;
            }
        }
    }
    if(answer.length === 0) {
        answer.push(-1);
    }
    console.log(answer);
}

let arr1 = [3, 2, 4, 4, 2, 5, 2, 5, 5];
let arr2 = [1, 2, 3, 3, 3, 3, 4, 4];
let arr3 = [3, 5, 7, 9, 1];
solution(arr1);
solution(arr2);
solution(arr3);

// 평가기준
// - 문제를 해결하기 위한 함수를 선언할 수 있고,
// - 함수 내부에서 배열을 탐색할 수 있고,
// - 배열 앞뒤 값을 비교하고 중복되는 횟수를 카운트하면서 변경할 수 있어야 합니다.
// - 배열과 다른 Set, Map(또는 Dictionary) 타입을 활용할 수 있어야 합니다.

//해설
// function countOf(arr, value) { //---가
//     var count = 0;
//     arr.forEach(element => {
//         if (element == value) count++;
//     });
//     return count;
// }

// function solution(arr) {
//     var answer = [];
//     var set = new Set([]);
//     arr.forEach( element => {
//         if (set.has(element)) return;   //---나
//         set.add(element);
//         count = countOf(arr, element);  
//         if (count > 1) answer.push(count); //---다
//     });
//     if (answer.length == 0) answer.push(-1); //---라
//     return answer;
// }

//해설2
// function solution(arr) {
//     var answer = [];    
//     var map = new Map();
//     arr.forEach( element => {
//         if (map.has(element)) { //---가
//             map.set(element, map.get(element) + 1);
//         }
//         else { //---나
//             map.set(element, 1);
//         }        
//     });
//     map.forEach( (value) => {
//         if (value > 1) {    //---다
//             answer.push(value);
//         }
//     });
//     if (answer.length == 0) answer.push(-1); //---라
//     return answer;
// }