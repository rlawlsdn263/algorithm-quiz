//reduce
//map, filter처럼 어떤 배열을 생성해 return하는 것이 아니라
//하나의 어떤 값을 생성해서 return한다.

//작동원리?
// function reduce(predicate, val) {
//     let result = val;
//     for(let i = 0; i < a.length; i++) {
//         result = predicate(result, a[i]);
//     }
//     return result;
// }

a = [1, 2, 3, 4, 5];
let answer = a.reduce(function(acc, value) {
    //콜백함수
    return acc + value;
}, 0);
console.log(answer);