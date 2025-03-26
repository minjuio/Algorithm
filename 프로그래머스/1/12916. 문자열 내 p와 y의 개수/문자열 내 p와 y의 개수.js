function solution(s){
   return s.match(/[pP]/g)?.length == s.match(/[yY]/g)?.length ? true : false;
}