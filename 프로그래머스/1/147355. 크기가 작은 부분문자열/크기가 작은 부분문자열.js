function solution(t, p) {
    let tArr = t.split("")
    let count = 0;
    
    for(let i=0; i<=t.length - p.length; i++) {
        if(tArr[i] <= p.slice(0, 1) && t.slice(i, i + p.length) <= parseInt(p)) count++;
    }
    
    return count;
}