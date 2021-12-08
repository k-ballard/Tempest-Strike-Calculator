
// Need to learn how to export this (turn files into modules)
class Skills {
    constructor(tags, baseDmg, dmgMods, manaCost, manaCostMods, atkSpd, atkSpdMods, cdr, cdrMods, critChance, critChanceMods, critMulti, critMultiMods) {
      this.tags = tags;
      this.baseDmg = baseDmg;
      this.dmgMods = dmgMods;
      this.manaCost = manaCost;
      this.manaCostMods = manaCostMods;
      this.atkSpd = atkSpd;
      this.atkSpdMods = atkSpdMods;
      this.cdr = cdr;
      this.cdrMods = cdrMods;
      this.critChance = critChance;
      this.critChanceMods = critChanceMods;
      this.critMulti = critMulti;
      this.critMultiMods = critMultiMods;
    }

    set newBaseDmg(x) {
      this.baseDmg = x;
    }

    get calculateBaseDmg() {
         return this.calculateDmgMods();
    }

    calculateDmgMods() {
      // Attempt to calculate new damage: working
      let modLeng = this.dmgMods.length;
      let baseLeng = this.baseDmg.length;
      let mods = this.dmgMods;
      let bases = this.baseDmg;
        for (let i = 0; i < modLeng; i++) {
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
          }
        };
     
    set newAtkSpd(x) {
      this.atkSpd = x;
    }

    get calcAtkSpd() {
      return this.mergeAtkSpdMods;
    }
       
    mergeAtkSpdMods() {
      // Attempt to calculate new atkSpd: working
      let total = this.atkSpdMods.reduce(
        (previousValue, currentValue) => previousValue + currentValue, 0);
      
      return this.atkSpd += total;
    }

    get calcCdr() {
      return this.mergeCdrMods;
    }

    mergeCdrMods() {
      // Attempt to calculate new cooldown: not working
      let total = this.cdrMods.reduce(
        (previousValue, currentValue) => previousValue + currentValue, 0);
      
      return this.cdr += total;
    }
}
const hammerThrow = new Skills(
  ['Physical','Throwing Attack','Strength','Dexterity'],
  [['Physical', 18]],
  [['Cold', 3],['Fire', 20],['Lightning', 10],['Physical', 10]], 
  0,
  [], 
  1,
  [-.2,.2,.4,-.3,.3],
  0,
  [-.1,-.5,-.1],
  .05,
  [],
  2,
  []);

const smite = new Skills(
  ['Fire','Spell','Attunement'],
  [['Fire', 30]],
  [],
  3,
  [],
  1,
  [],
  0,
  [],
  .05,
  [],
  2,
  []);


console.log(hammerThrow.cdr);
console.log(hammerThrow.cdrMods);
hammerThrow.calcCdr();
console.log(hammerThrow.cdr);
console.log(hammerThrow.cdrMods);