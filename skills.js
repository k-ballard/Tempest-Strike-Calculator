
// Need to learn how to export this (make files modules)
class Skills {
    constructor(tags, baseDamage, damageModifiers, manaCost, attackSpeed) {
      this.tags = tags;
      this.baseDamage = baseDamage;
      this.damageModifiers = damageModifiers;
      this.manaCost = manaCost;
      this.attackSpeed = attackSpeed;
    }

    get newBaseDamage() {
         return this.calculateDamageModifiers();
    }
    calculateDamageModifiers() {
        // Attempt to calculate new damage with a For loop and an If condition
          for (let i = 0; i < this.damageModifiers.length; i++) {
                if (this.damageModifiers[i][0] === this.baseDamage[i][0]) {
                    //this.baseDamage.push(this.damageModifiers[i][0]);
                    return this.baseDamage[i][1] += this.damageModifiers[i][1];
             }
         }
        
    }
  }
  
const hammerThrow = new Skills(
    ['Physical','Throwing Attack','Strength','Dexterity'],
    [['Physical', 18]],
    [['Physical', 2],['Cold', 3]], 
    0, 
    1);



console.log(hammerThrow.newBaseDamage);
console.log(hammerThrow.baseDamage);
console.log(hammerThrow.damageModifiers);