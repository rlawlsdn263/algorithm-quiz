//풀이
function solution(id_list, report, k) {
    var answer = [];
    let reported = [];
    for(let id of id_list) {
        for(let i = 0; i < report.length; i++) {
            if(report[i].split(' ')[0] === id) {
                reported.push(report[i].split(' ')[1]);
            }
        }
        answer.push(reported);
    }


    console.log(answer);
    // return answer;
}

let id_list = 	["muzi", "frodo", "apeach", "neo"];
let report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"];
let k = 2;

solution(id_list, report, k);