function solution(num, total) {
    // x, x+1, x+2, ... , x+(num-1)
    // total = x*num + (0+1+2+...+(num-1))
    // total = x*num + num*(num-1)/2
    // x*num = total - num*(num-1)/2
    // x = total/num - (num-1)/2
    const start = total/num - (num - 1) / 2;
    
    const answer = [];
    for (let i = 0; i < num; i++) {
        answer.push(start + i);
    }
    
    return answer;
}