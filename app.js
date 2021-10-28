
const tempestStrike = {
    tags : ['Physical', 'Lightning', 'Cold', 'Spell', 'Melee', 'Strength', 'Attunement'],
    baseDamage : {Physical: 1, Cold: 1, Lightning: 1},
    manaCost : 0
};

const earthSpikes = {
    baseDamage : {Physical: 20},
    procChance : .2,
    proc() {
        return Math.random() < earthSpikes.procChance;
    },
    get getProc() {
        return this.proc;
    }
};

const lightningBolt = {
    baseDamage : {Lightning: 20},
    procChance : .2,
    proc() {
        return Math.random() < lightningBolt.procChance;
    }
};

const northernWinds = {
    baseDamage : {Cold: 14},
    procChance : .2,
    proc() {
        return Math.random() < northernWinds.procChance;
    }
};

/* Tests for proc rolls */
console.log("Earth Spike hit: " + earthSpikes.proc());
console.log("Northern Winds hit: " + lightningBolt.proc());
console.log("Lightning Bolt hit: " + northernWinds.proc());

const static = {
    tags : ['Lightning', 'Spell', 'Intelligence', 'Attunement'],
    baseDamage : {Lightning : 20},
    onePoint : {
        
    },
    twoPoint : {

    },
    threePoint : {

    },
    fourPoint : {

    }

}

console.log(earthSpikes.getProc());

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