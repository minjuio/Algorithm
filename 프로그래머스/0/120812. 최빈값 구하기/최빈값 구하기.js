function solution(array) {
    let m = new Map();
    
    for(let a of array) {
        m.set(a, (m.get(a) || 0)+1);
    }
    m = [...m].sort((a,b)=> b[1]-a[1]);
    
    return m.length > 1 && m[0][1] == m[1][1] ? -1 : m[0][0];
}