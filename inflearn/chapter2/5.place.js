//풀이
function place(arr) {
    let answer = [], place = 1;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] < arr[j]) {
                place++;
            } 
            // else if(arr[i] === arr[j]) {
            //     place = place;
            // }
        }
        answer.push(place);
        place = 1;
    }
    console.log(answer);
}

// let arr = [87, 89, 92, 100, 76];
// let arr2 = [80, 80, 80, 100, 76];
// place(arr2);

//해설
function solution(arr) {
    //[1, 1, 1, 1, 1] 생성
    let n = arr.length;
    let answer = Array.from({length: n}, () => 1);

    //이중반복문을 활용
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(arr[j] > arr[i]) answer[i] ++;
        }
    }
    console.log(answer);
}

let arr = [87, 89, 92, 100, 76];
solution(arr);