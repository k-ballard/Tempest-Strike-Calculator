
// Need to learn how to export this (turn files into modules)
class Skills {
    constructor(tags, baseDamage, damageModifiers, manaCost, attackSpeed, cooldown, critChance, critMulti) {
      this.tags = tags;
      this.baseDamage = baseDamage;
      this.damageModifiers = damageModifiers;
      this.manaCost = manaCost;
      this.attackSpeed = attackSpeed;
      this.cooldown = cooldown;
      this.critChance = critChance;
      this.critMulti = critMulti;
    }

    get calculateBaseDamage() {
         return this.calculateDamageModifiers();
    }
    calculateDamageModifiers() {
        // Attempt to calculate new damage
        let modifierLeng = this.damageModifiers.length;
        let baseLeng = this.baseDamage.length;
        let mods = this.damageModifiers;
        let bases = this.baseDamage;
        let emptyArr = [];
          for (let i = 0; i < modifierLeng; i++) {
            for (let j = 0; j < baseLeng; j++) {
              //console.log(mods[i][0]);
              //console.log(bases[j][0]);
              if (mods[i][0] === bases[j][0]) {
                //console.log("There's a damage type match.");
                bases[j][1] += mods[i][1];
                //console.log(bases);
                //console.log(mods);
              } else if (mods[i][0] !== bases[j][0] || bases[i] === undefined) {
                  //console.log("These damage types don't match.")
                  //console.log(bases);
                  //console.log(mods);
                  bases.push(mods[i]);
                  //console.log(bases);
                  //console.log(mods);
              }
          }
          /*if (this.baseDamage[i] === undefined) {
            console.log("We need to add this base damage type to the baseDamage property.");
            return this.baseDamage.push(this.damageModifiers[i]);
          }*/
        }
      }  
  }
  
const hammerThrow = new Skills(
  ['Physical','Throwing Attack','Strength','Dexterity'],
  [['Physical', 18]],
  [['Cold', 3],['Physical', 2],['Lightning', 1],['Physical', 5]], 
  0, 
  1,
  0,
  .05,
  2);

const smite = new Skills(
  ['Fire','Spell','Attunement'],
  [['Fire', 30]],
  [],
  3,
  1,
  0,
  .05,
  2);

hammerThrow.calculateBaseDamage;

console.log(hammerThrow.damageModifiers);
console.log(hammerThrow.baseDamage);