
// Need to learn how to export this (make files modules)
class Skills {
    constructor(tags, baseDamage, damageModifiers, manaCost, attackSpeed) {
      this.tags = tags;
      this.baseDamage = baseDamage;
      this.damageModifiers = damageModifiers;
      this.manaCost = manaCost;
      this.attackSpeed = attackSpeed;
    }
    get proc() {
        return this.procTest();
    }
    procTest() {
        return Math.random() < this.procChance;
    }
    get calculateDamageModifiers() {
        return this.calculateDamageModifiers();
    }
    calculateDamageModifiers() {
        z = this.damageModifiers.reduce((a, b) => a + b);
        this.baseDamage = z // + this.damageModifiers;
    }
  }
  
const hammerThrow = new Skills(['Physical','Throwing Attack','Strength','Dexterity'], {Physical: 18}, {Physical: 2}, 0, 1);

console.log(hammerThrow.tags);
console.log(hammerThrow.baseDamage);
console.log(hammerThrow.damageModifiers);
console.log(hammerThrow.manaCost);
console.log(hammerThrow.attackSpeed);

hammerThrow.calculateDamageModifiers;

console.log(hammerThrow.baseDamage);

 // baseDamage : {Physical: 20},
 // damageModifiers : [0],
 // procChance : .2,
 // procModifiers : [0],