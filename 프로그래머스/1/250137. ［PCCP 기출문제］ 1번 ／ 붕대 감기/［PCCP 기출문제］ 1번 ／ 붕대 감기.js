function solution(bandage, health, attacks) {
    let currentTime = 0;
    let successCount = 0;
    let currentHealth = health;
    const attacksLen = attacks[attacks.length-1][0];
    const [duration, healPerSec, addHeal] = bandage;
    
    let nextAttack = attacks.shift();
    
    for(let i=0; i<=attacksLen; i++) {
        if(nextAttack[0] == currentTime) {
         currentHealth -= nextAttack[1];
         successCount = 0;
         nextAttack = attacks.shift();
         if(currentHealth <= 0) return -1;
     } else {
         successCount++;
         currentHealth += healPerSec;
         if(successCount == duration) {
             currentHealth += addHeal;
             successCount = 0;
         }
         currentHealth = Math.min(currentHealth, health);
     }
        currentTime++;
    }
    return currentHealth;
}