//내장 함수를 이용해 최솟값, 최댓값 호출하기
function findSmallestNumber(arr) {
    //최솟값 
    let min = Math.min(...arr);
    
    //최댓값
    let max = Math.max(...arr);

    return min, max
};

let arr = [5, 3, 7, 11, 2, 15, 17];
findSmallestNumber(arr);