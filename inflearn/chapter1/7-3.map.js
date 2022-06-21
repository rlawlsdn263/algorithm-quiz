//map
//배열 안 요소를 탐색해 새로운 배열을 생성해서 리턴한다
//콜백함수로 리턴한 값으로 새로운 배열을 만든다.
//새로 만들어진 배열의 길이는 원본과 동일하다!!!

//작동원리?
// function map(predicate, thisArg) {
//     let list = [];
//     for(let i = 0; i < a.length; i++) {
//         list.push(predicate(a[i], i));
//     }
//     return list;
// }

a = [10, 11, 12, 13, 14, 15];
let answer = a.map(function(value, index) {
    //콜백함수
    if(value % 2 == 0) return value;
}, [1, 2]);
console.log(answer);