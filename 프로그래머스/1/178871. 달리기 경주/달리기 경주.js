function solution(players, callings) {
    const hashMap = {};
    
    for(let i=0; i<players.length; i++) {
        hashMap[players[i]] = i;
    }
    
    for(calling of callings) {
        let currentIndex = hashMap[calling];
        let frontPlayer = players[currentIndex - 1];
        
        players[currentIndex - 1] = calling;
        players[currentIndex] = frontPlayer;
        
        hashMap[calling] = currentIndex - 1;
        hashMap[frontPlayer] = currentIndex;
    }
    return players;
}