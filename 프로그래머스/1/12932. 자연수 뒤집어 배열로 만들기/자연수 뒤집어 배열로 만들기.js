function solution(n) {
    return n.toString().split("").reverse().map((r)=> Number.parseInt(r));
}