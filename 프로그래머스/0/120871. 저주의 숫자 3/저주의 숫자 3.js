function solution(n) {
    let num = 0;
    let count = 0;
    
    while(count < n) {
        num++;
        if(num%3 !== 0 && !num.toString().includes(3)) count++;
    }
    return num;
}