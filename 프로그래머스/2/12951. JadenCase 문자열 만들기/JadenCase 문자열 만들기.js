function solution(s) {
    let arr = s.toLowerCase().split(" ");
    // let newArr = arr.filter((e)=> e !== undefined && e !== "" && e !== null);
    let answer = [];

    for(let i=0; i<arr.length; i++) {
        if(arr[i] === "") answer.push("");
        else answer.push(arr[i][0].toUpperCase() + arr[i].slice(1))
    }
    return answer.join(" ");
}