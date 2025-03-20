function solution(n, lost, reserve) {
    lost.sort((a,b) => a-b);
    reserve.sort((a,b) => a-b);
    
    let realLost = lost.filter((l)=> !reserve.includes(l));
    let realReserve = reserve.filter((r)=> !lost.includes(r));
    
    let count = n - realLost.length;
    
    for(let re of realReserve){
        if(realLost.includes(re-1)){
            realLost.splice(realLost.indexOf(re-1), 1);
            count++;
            continue;
        }
        if(realLost.includes(re+1)){
            realLost.splice(realLost.indexOf(re+1), 1);
            count++;
        }
    }
    return count;
}