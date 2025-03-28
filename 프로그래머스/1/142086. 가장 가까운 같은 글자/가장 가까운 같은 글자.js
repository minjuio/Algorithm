function solution(s) {
    let arr = s.split("");
    let answer = [-1];

    for(let i=1; i<arr.length; i++) {
        if(arr.slice(0, i).lastIndexOf(arr[i]) == -1) answer.push(-1);
        else {
            answer.push(i - arr.slice(0, i).lastIndexOf(arr[i]));  
        }
    }
    return answer;
}