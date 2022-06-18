//풀이
function removeDuplicate(str) {
    let answer = [];
    for(let i = 0; i < str.length; i++) {
        if(i === str.indexOf(str[i])) answer.push(str[i]);
    }
    console.log(answer);
}

//해설 - .filter
function solution(s) {
    let answer;
    //filter는 true를 return한 요소들만 모아 새로운 배열을 만든다
    //인자로 넘어간 callback 함수가 true를 return한 value를 따로 모은다
    answer = s.filter(function(v,i) {
        //다음 조건이 true면 v를 return 한다.
        return s.indexOf(v) === i;
        // if(s.indexOf(v) === i) { 
        //     return true;
        // }
    });
    console.log(answer);
}


let str = ['good', 'time', 'good', 'time', 'student'];
solution(str);