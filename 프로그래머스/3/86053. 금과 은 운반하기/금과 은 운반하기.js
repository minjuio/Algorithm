function solution(a, b, g, s, w, t) {
    let left = 0;
    let right = 10**15;
    
    while(left <= right){
        const mid = Math.floor((left + right)/2);
        
        if(isPossible(a,b,g,s,w,t,mid)){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

function isPossible(a,b,g,s,w,t,time){
    let totalGold = 0;
    let totalSilver = 0;
    let totalAll = 0;
    
    for(let i=0; i<g.length; i++){
        const roundTrips = Math.floor(1 + (time - t[i]) / (2 * t[i]));
        const maxLoad = roundTrips * w[i];
        
        const aGold = Math.min(g[i], maxLoad);
        const aSilver = Math.min(s[i], maxLoad);
        const aAll = Math.min(g[i]+s[i], maxLoad);
        
        totalGold += aGold;
        totalSilver += aSilver;
        totalAll += aAll;
    }
    
    return totalGold >= a && totalSilver >= b && totalAll >= a+b;
}