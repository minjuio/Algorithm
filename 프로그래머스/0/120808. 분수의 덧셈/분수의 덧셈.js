function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let denom=0;
    let numer=0;
    if(denom1 !== denom2) {
        denom = denom1 * denom2;
        numer = numer1*denom2 + numer2*denom1; 
    }
    else {
        numer = numer1+numer2;
        denom = denom1;
    }
    
    let i = 2;
    while(i<=Math.min(numer, denom)) {
         if(denom % i == 0 && numer % i == 0) {
             denom = denom/i;
             numer = numer/i;
         } else {
             i++;
         }
    }
    return [numer, denom];
}