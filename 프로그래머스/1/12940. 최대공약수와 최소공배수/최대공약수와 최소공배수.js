function solution(n, m) {
    let gcdNum = n;
    
    if(n>m) gcdNum = gcd(n,m);
    else gcdNum = gcd(m,n);
    
    return [gcdNum, n*m/gcdNum];
}
function gcd(n, m) {
    if(n%m == 0) return m;
    return gcd(m, n%m)
}