function solution(s) {
    if(s.length === 4 || s.length === 6){
        if(s.includes("e")) return false; 
        if(Number.isInteger(Number(s))) return true;
    }
    return false;
}