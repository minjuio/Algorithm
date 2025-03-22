function solution(numbers) {
    let arr = [];
    let answer = [];
    
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            arr.push(numbers[i]+numbers[j]);
        }
    }
    arr = arr.sort((a,b)=>a-b);
    answer.push(arr[0])
    for(let i=1; i<arr.length; i++){
        if(arr[i] != arr[i-1]){
            answer.push(arr[i])
        }
    }
    return answer;
}