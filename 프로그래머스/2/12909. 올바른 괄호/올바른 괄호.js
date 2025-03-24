function solution(s){
    var answer = true;

    const stack = [];
    
    for(const i of s) {
        if(i === "(") stack.push('(');
        else {
            if(stack.length === 0) return false;
            else stack.pop();
        }
    }
    
    return stack.length === 0;
}