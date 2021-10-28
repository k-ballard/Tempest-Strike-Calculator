
const tempestStrike = {
    tags : ['Physical', 'Lightning', 'Cold', 'Spell', 'Melee', 'Strength', 'Attunement'],
    baseDamage : {Physical: 1, Cold: 1, Lightning: 1},
    manaCost : 0
};

const earthSpikes = {
    baseDamage : {Physical: 20},
    damageModifier : 0,
    procChance : .2,
    procModifiers : [],
    procTest() {
        return Math.random() < this.procChance + this.procModifier;
    },
    newProcChance() {
        return this.procModifiers.reduce((a, b) => a + b);
    }
};

const lightningBolt = {
    baseDamage : {Lightning: 20},
    procChance : .2,
    procTest() {
        return Math.random() < this.procChance;
    },
    get getProc() {
        return this.proc;
    }
};

const northernWinds = {
    baseDamage : {Cold: 14},
    procChance : .2,
    procTest() {
        return Math.random() < this.procChance;
    },
    get getProc() {
        return this.proc;
    }
};

/* Tests for proc rolls */
console.log("Earth Spike hit: " + earthSpikes.procTest());
//console.log("Northern Winds hit: " + lightningBolt.procTest());
//console.log("Lightning Bolt hit: " + northernWinds.procTest());

const static = {
    tags : ['Lightning', 'Spell', 'Intelligence', 'Attunement'],
    baseDamage : {Lightning : 20},
    skillPoints : 0,
    determineSkillPoints() {
        if (skillPoints === 0) {

        } else if (skillPoints === 1) {
            
        } else if (skillPoints === 2) {

        } else if (skillPoints === 3) {

        } else if (skillPoints === 4) {

        } else {

        }

    }
}


/*
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