function solution(bandage, health, attacks) {
    let currentTime = 0;
    let successCount = 0;
    let currentHealth = health;
    const lastAttackTime = attacks[attacks.length-1][0];
    const [duration, healPerSec, bonusHeal] = bandage;
    
    const attacksCopy = [...attacks];
    let nextAttack = attacksCopy.shift();
    
    for(let i=0; i<=lastAttackTime; i++) {
        if(nextAttack[0] == currentTime) {
         currentHealth = applyDemage(currentHealth, nextAttack[1]);
         successCount = 0;
         nextAttack = attacksCopy.shift();
         if(currentHealth <= 0) return -1;
     } else {
         successCount++;
         currentHealth = applyHeal(currentHealth, healPerSec);
         if(successCount == duration) {
             currentHealth = applyHeal(currentHealth, bonusHeal);
             successCount = 0;
         }
         currentHealth = applyMaxHeal(currentHealth, health);
     }
        currentTime++;
    }
    return currentHealth;
}

function applyMaxHeal(currentHealth, health){
    return Math.min(currentHealth, health);
}

function applyDemage(currentHealth, damage){
    return currentHealth - damage;
}

function applyHeal(currentHealth, heal){
    return currentHealth + heal;
}