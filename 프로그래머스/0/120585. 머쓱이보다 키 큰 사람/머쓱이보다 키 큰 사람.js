function solution(array, height) {
    var answer = 0;
    
    for(let n of array) {
        if(n > height) answer++;
    }
    return answer;
}