//forEach, map, filter, reduce
//위 네 개는 고차함수로 매개변수로 함수를 전달받을 수 있다!

//1. forEach
//function forEach(predicate, thisArg) {
//  for(let i = 0; i < a.length; i++) {
//    //콜백함수 호출
//    predicate(a[i], i)
//  }
//}

a = [10, 11, 12, 13, 14, 15];
a.forEach(function(value, index) {
    //콜백함수의 내부
    console.log(value, index, this);
}, [1, 2]);