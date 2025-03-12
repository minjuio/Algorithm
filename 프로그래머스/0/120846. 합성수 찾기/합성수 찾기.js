function solution(n) {
    var answer = 0;
    let count = 0;
    
    if(n<4) return 0;
    
    // 약수의 개수가 3개인지 확인, 3개라면 break 하고 answer++
    for(let i=4; i<=n; i++) {
        count = 0;
        for(let j=1; j<=i; j++){
            if(i%j === 0) count++;
            if(count >= 3) {
                answer++;
                break;
            }
        }
    }
    return answer;
}