function solution(n) {
    let answer = n + 1;
    
    while(1) {
        if(binary(n) === binary(answer)) return answer;
        else answer++;
    }
}

function binary(num) {
    let arr = [];
    let count = 0;
    
    while(num >= 1) {
        arr.push(num % 2);
        num = Math.floor(num / 2);
    } 
    for(let a of arr){
        if(a == 1) count++;
    }
    return count;
}