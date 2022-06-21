//내 풀이
function rotationSystem(day, arr) {
    let answer = 0;
    for(let i = 0; i < arr.length; i++) {
        if (day.toString() === arr[i].toString()[1]) {
            answer++;
        }
    }
    return answer;
}

let arr = [25, 23, 11, 47, 53, 17, 33];
rotationSystem(1, arr);

//toString과 subStr을 이용한 풀이법 
function solution(n,cars){
    let answer =0;
  
    for(let x of cars){
      if(x.toString().substr(-1) == n){
        answer++
      }
    }
    
    return answer;
  }

//filter를 이용한 풀이법
function solution(date, arr) {
    let target = arr.filter(el => el % 10 == date);
    return target.length;
}

//정답
function rotationSystem(day, arr) {
    let answer = 0;
    for(let x of arr) {
        if(x % 10 === day) answer++;
    }
    return answer;
}