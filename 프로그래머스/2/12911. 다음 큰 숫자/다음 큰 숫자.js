function solution(n) {
    let answer = n + 1;
    
    
    while(1) {
        if(n.toString(2).match(/1/g).length === answer.toString(2).match(/1/g).length) return answer;
        else answer++;
    }
}