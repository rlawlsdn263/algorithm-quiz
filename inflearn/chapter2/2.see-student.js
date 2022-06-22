//풀이
//이중 반복문은 지양하는 게 좋다!
function seeStudent(arr) {
    let answer = 1; 
    let tallestStudent = arr[0];
    for(let i = 1; i < arr.length; i++) {
        for(let j = 0; j < i; j++) {
            if( arr[i] > tallestStudent) {
                tallestStudent = arr[i];
                answer++;
            }
            
        }
    }
    console.log(answer);
}

//해설
function solution(arr) {
    let answer = 1, max = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            answer++;
            max = arr[i];
        }
    }
    console.log(answer);
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
seeStudent(arr);
solution(arr);