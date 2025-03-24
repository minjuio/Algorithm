function solution(brown, yellow) {
    // (1) x*2 + y*2 - 4 = brown
    // (2) (x-2)*(y-2) = yellow
    
    // (1)의 변형 y = brown/2 + 2 - x
    // (2)에 대입 (x-2)(brown/2 - x) = yellow
    // (2) 정리
    // -x^2 + (2+brown/2)x -brown -yellow = 0
    
    let a = -1;
    let b = (2+brown/2);
    let c = -brown-yellow;
    
    let x = (-b - Math.sqrt(Math.pow(b,2) -4*a*c))/2*a
    let y = brown/2 + 2 - x;       
  
    return [x, y]
}