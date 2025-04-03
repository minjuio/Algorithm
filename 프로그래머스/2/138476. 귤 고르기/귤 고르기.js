function solution(k, tangerine) {
    let count = 0;
    let quantityBySize = sortedMap(tangerine);

    while(k > 0) {
        k -= quantityBySize[0][1];
        quantityBySize.shift();
        count++;
    }
    return count;
}

function sortedMap(arr) {
    let m = new Map();
    
    for(let a of arr) m.set(a, (m.get(a) || 0)+1);
    
    return [...m].sort((a,b)=> b[1]-a[1]);
}