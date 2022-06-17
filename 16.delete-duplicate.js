//풀이
function deleteDuplicate(str) {
    let answer = '';
    for(let i = 0; i < str.length; i++) {
            for(let j = i + 1; j < str.length; j++) {
            if(str[i] === str[j]) {
                answer = str.splice(j, 0);
            }
        }
    }
    console.log(answer);
}

let str = 'ksekkset';
deleteDuplicate(str);