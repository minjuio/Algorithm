function solution(chicken) {
    let answer = 0;
    let coupon = chicken;
    
    while(coupon >= 10) {
        let newChicken = Math.floor(coupon/10);
        answer += newChicken;
        coupon = (coupon % 10) + newChicken;
    }
    return answer;
}