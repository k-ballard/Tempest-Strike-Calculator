
const tempestStrike = {
    tags : ['Physical', 'Lightning', 'Cold', 'Spell', 'Melee', 'Strength', 'Attunement'],
    baseDamage : {Physical: 1, Cold: 1, Lightning: 1},
    manaCost : 0
};

const earthSpikes = {
    baseDamage : {Physical: 20},
    damageModifiers : [0],
    procChance : .2,
    procModifiers : [0],
    procTest() {
        return Math.random() < this.procChance;
    },
    newProcChance() {
        z = this.procModifiers.reduce((a, b) => a + b);
        this.procChance = z + this.procChance;
    }
};

const lightningBolt = {
    baseDamage : {Lightning: 20},
    damageModifiers : [0],
    procChance : .2,
    procModifiers : [0],
    procTest() {
        return Math.random() < this.procChance;
    },
    newProcChance() {
        z = this.procModifiers.reduce((a, b) => a + b);
        this.procChance = z + this.procChance;
    }
};

const northernWinds = {
    baseDamage : {Cold: 14},
    damageModifiers : [0],
    procChance : .2,
    procModifiers : [0],
    procTest() {
        return Math.random() < this.procChance;
    },
    newProcChance() {
        z = this.procModifiers.reduce((a, b) => a + b);
        this.procChance = z + this.procChance;
    }
};

/* Tests for procModifiers calculations and overwriting of procChance
console.log(northernWinds.procChance);
northernWinds.newProcChance();
console.log(northernWinds.procChance);
*/

/* Tests for proc rolls */
console.log("Earth Spike hit: " + earthSpikes.procTest());
console.log("Lightning Bolt hit: " + lightningBolt.procTest());
console.log("Northern Winds hit: " + northernWinds.procTest());


/* These are my attempt at adding the skill nodes for Tempest Strike. Saving these could be useful if I decide to create a damage calculator in the future.
const static = {
    tags : ['Lightning', 'Spell', 'Intelligence', 'Attunement'],
    baseDamage : {Lightning : 20},
    //skillPointsRange : [0, 1, 2, 3, 4],
    totalSkillPoints : 0,
    determineModifiers() {
        if (totalSkillPoints === this.skillPointsRange.indexOf(0)) {

        } else if (skillPoints === 1) {
            
        } else if (skillPoints === 2) {

        } else if (skillPoints === 3) {

        } else if (skillPoints === 4) {

        } else {

        }

    }
}

console.log(static.skillPointsRange);
*/

/* These might be useful if I want to roll for tertiary effects AFTER the initial secondary effects have beenr rolled.
let hailstorm = false;
let chargedStone = false;
let tempest = false;
let allTertiaryProcs = false;
let noTertiaryProcs = false;

function tertiaryEffectProc() {
    if(rollEarthSpikes() === true && rollNorthernWinds() === true && rollLightningBolt() === false) {
        return hailstorm = true;
    } else if (rollEarthSpikes() === false && rollNorthernWinds() === true && rollLightningBolt() === true) {
        return tempest = true;
    } else if (rollEarthSpikes() === true && rollNorthernWinds() === false && rollLightningBolt() === true) {
        return chargedStone = true;
    } else if (rollEarthSpikes() === true && rollNorthernWinds() === true && rollLightningBolt() === true) {
        return allTertiaryProcs = true;
    } else if (rollEarthSpikes() === false && rollNorthernWinds() === false && rollLightningBolt() === false) {
        return noTertiaryProcs = true;
    } else {
        console.log('Something went wrong...');
    }
};

tertiaryEffectProc();
console.log('Does Hailstorm proc? ' + hailstorm);
console.log('Does Tempest proc? ' + tempest);
console.log('Does Charged Stone proc? ' + chargedStone);
console.log('Do all secondary effects proc? ' + allTertiaryProcs);
console.log('Do none of the secondary effects proc? ' + noTertiaryProcs);
*/