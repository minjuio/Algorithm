function solution(cards1, cards2, goal) {
    let word1 = cards1.shift();
    let word2 = cards2.shift();
    
    for(let word of goal) {
        if(word1 == word) word1 = cards1.shift();
        else if (word2 == word) word2 = cards2.shift();
        else return "No";
    }
    return "Yes";
}