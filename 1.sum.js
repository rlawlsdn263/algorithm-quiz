//풀이
function jinu(arr) {
    let answer, max = Number.MIN_SAFE_INTEGER;
    for(let x of arr) {
        let sum = x.toString().split('').reduce((a, b) => a + parseInt(b), 0);
        if(sum > max) {
            max = sum;
            answer = x;
        }
        else if(sum === max) {
            if(x > answer) {
                answer = x;
            }
        }
    }
    console.log(answer);
}


//해설1 - while문으로 숫자 나누기
function solution(arr) {
    let answer, max = Number.MIN_SAFE_INTEGER;
    
    //while문으로 숫자를 나눠서 총합 구하기
    for(let x of arr) {
        let sum = 0, tmp = x;
        while(tmp) {
            // let t = tmp % 10;
            // sum += t;
            sum += (tmp % 10);
            //Math.floor를 사용하지 않으면 12.8이 나온다
            tmp = Math.floor(tmp/10);
        }

        //구해진 총합 비교해서 답 도출하기
        if(sum > max) {
            max = sum;
            answer = x;
        } else if(sum === max) {
            if(x > answer) answer = x;
        }
    }
    console.log(answer);
}

//해설2 - 내장함수로 숫자 나누기
function solution2(arr) {
    let answer, max = Number.MIN_SAFE_INTEGER;
    
    //내장함수 이용해서 답 구하기
    //.reduce를 사용할 때 Number()로 string을 숫자화해준다!
    for(let x of arr) {
        let sum = x.toString().split('').reduce((a, b) => a + Number(b), 0);
        
        //구해진 총합 비교해서 답 도출하기
        if(sum > max) {
            max = sum;
            answer = x;
        } else if(sum === max) {
            if(x > answer) answer = x;
        }
    }
    console.log(answer);
}

let arr = [128, 460, 603, 40, 521, 137, 123];
solution(arr);
solution2(arr);
