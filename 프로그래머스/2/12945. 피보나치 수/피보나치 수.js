function solution(n) {
    let f = [0,1];
    let m = 1234567;
    
    for(let i=2; i<=n; i++){
        f.push(f[i-2] % m +f[i-1] % m);
    }
    return f.pop() % m;
}