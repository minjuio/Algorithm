function solution(targets) {
    let cnt = 0;
    let pos = 0;
    
    targets.sort((a,b) => a[1] - b[1]);
    
    for(let i=0; i<targets.length; i++){
        let [a, b] = targets[i];
        
        if(pos <= a) {
            pos = b;
            cnt++;
        } 
    }
    return cnt;
}