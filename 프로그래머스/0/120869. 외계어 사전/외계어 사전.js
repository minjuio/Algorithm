function solution(spell, dic) {
    for(let dd of dic){
       if(dd.length !== spell.length) continue;
        
       for(let char of spell){
           if(dd.includes(char)){
               dd = dd.replace(char, "");
           } else {
               break;
           }
       }
        if(dd === "") return 1;
    }
    return 2;
}