//filter
//새로운 배열을 생성해서 리턴한다.
//콜백함수가 true를 리턴한 값만 저장한다!!!
//콜백함수가 리턴하는 값만으로 구성된 배열을 생성한다.
//원본 배열에서 콜백함수가 true를 리턴하는 값만으로
//구성된 새로운 배열을 만든다. 맒그대로 filter

//작동원리?
// function filter(predicate, thisArg) {
//     let list = [];
//     for(let i = 0; i < a.length; i++) {
//         if(predicate(a[i], i)) list.push(a[i]);
//     }
//     return list;
// }


a = [10, 11, 12, 13, 14, 15];
let answer = a.filter(function(value, index) {
    //콜백함수
    return value%2 == 0;
}, [1, 2]);
console.log(answer);