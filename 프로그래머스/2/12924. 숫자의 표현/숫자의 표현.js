function solution(n) {
    
    // (a+(a+k)) * (k+1)/2 = n
    let count = 0;
    
    for (let k = 0; (k * (k + 1)) / 2 < n; k++) { 
        let num = n - (k * (k + 1)) / 2; 
        if (num % (k + 1) === 0) {
            count++;
        }
    }
    
    return count;
    
}