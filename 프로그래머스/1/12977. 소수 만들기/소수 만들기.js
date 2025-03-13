function solution(nums) {
    var answer = 0;
    
    for(let i=0; i<nums.length-2; i++){
        for(let j=i+1; j<nums.length-1; j++){
            for(let z=j+1; z<nums.length; z++){
                let sum = nums[i]+nums[j]+nums[z];
                if(sum === 2) {
                    answer++;
                    continue;
                }
                if(sum < 2 || sum % 2 === 0) continue;
                
                let isPrime = true;
                for(let k=3; k<=Math.sqrt(sum); k+=2){
                    if(sum % k === 0) {
                        isPrime = false; 
                        break;
                    }
                }
                if(isPrime) {
                    answer++;
                }
            }
        }
    }
    return answer;
}