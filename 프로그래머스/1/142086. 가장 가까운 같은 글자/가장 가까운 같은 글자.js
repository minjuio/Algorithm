function solution(s) {
//     let arr = s.split("");
//     let answer = [-1];

//     for(let i=1; i<arr.length; i++) {
//         if(arr.slice(0, i).lastIndexOf(arr[i]) == -1) answer.push(-1);
//         else {
//             answer.push(i - arr.slice(0, i).lastIndexOf(arr[i]));  
//         }
//     }
//     return answer;

    let answer = [];
    
    [...s].map((char, i) => {
        const count = s.slice(0, i).lastIndexOf(char);
        count < 0 ? answer.push(-1) : answer.push(i - count);
    });
        
    return answer;
}