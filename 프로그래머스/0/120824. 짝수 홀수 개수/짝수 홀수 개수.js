function solution(num_list) {
    let [even, odd] = [0, 0];
    
    num_list.map((num) => num % 2 == 0 ? even++ : odd++);
    
    return [even, odd];
}