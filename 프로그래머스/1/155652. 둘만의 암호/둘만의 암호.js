function solution(s, skip, index) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const existAlphabet = alphabet.split("").filter((char) => !skip.includes(char)).join("");
    let result = "";
    
    for(let char of s) {
        const newIndex = (existAlphabet.indexOf(char) + index) % existAlphabet.length;
        result += existAlphabet[newIndex];
    }
    return result;
}