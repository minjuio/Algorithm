function solution(s) {
    let arr = [];
    let count = 2;
    
    for(let str of s) {
        if(str == " ") {
            arr.push(" ");
            count = 2;
        }
        else {
            if(count % 2 == 0) {
                arr.push(str.toUpperCase());
            } else {
                arr.push(str.toLowerCase());
            }
            count++;
        }
    }
    return arr.join("");
}