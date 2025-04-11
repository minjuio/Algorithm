function solution(n, lost, reserve) {
    lost.sort((a,b)=>a-b);
    reserve.sort((a,b)=>a-b);

    let real_lost = lost.filter((l) => !reserve.includes(l));
    let real_reserve = reserve.filter((r) => !lost.includes(r));
    
    for(let i=0; i<=reserve.length; i++){
        let current = real_reserve.shift();

        if(real_lost.indexOf(current-1) != -1) {
            real_lost = real_lost.filter((e)=> e != (current-1));
        } else if(real_lost.indexOf(current+1) != -1) {
            real_lost = real_lost.filter((e)=> e != (current+1));
        }
    }
    return n - real_lost.length;
}