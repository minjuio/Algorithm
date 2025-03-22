function solution(n) {
//     let arr = n.toString().split("") //.map((p) => Number.parseInt(p));
    
//     return arr.sort((a,b)=>b-a).join("");
    
    return Number.parseInt(n.toString().split("").sort((a,b)=>b-a).join(""))
}