function solution(x, n) {
    let count = 1;
    let arr = [x];
    while(count != n){
        arr.push(x+x*count);
        count++;
    }
    return arr;
}