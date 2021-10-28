
let earthSpikesProcChance = .2;
let northernWindsProcChance = .2;
let lightningBoltProcChance = .2;

/*
let earthSpikesProc = false;
let northernWindsProc = false;
let lightningBoltProc = false;
*/


const tempestStrike = {
    baseDamage : {Physical: 1, Cold: 1, Lightning: 1},
    manaCost : 0
};

const earthSpikes = {
    baseDamage : {Physical: 20},
    procChance: .2
};

const lightningBolt = {
    baseDamage : {Lightning: 20},
    procChance: .2
}

const northernWinds = {
    baseDamage : {Cold: 14},
    procChance : .2
}

function rollEarthSpikes(x) {
    x = earthSpikesProcChance;
    return Math.random() < x;
};

function rollNorthernWinds(x) {
    x = northernWindsProcChance;
    return Math.random() < x;
};

function rollLightningBolt(x) {
    x = lightningBoltProcChance;
    return Math.random() < x;
};

/* Might be on to something here...
function secondaryEffectsProc() {
    if ()
}
*/

/* Tests for proc rolls */
console.log("Earth Spike hit: " + rollEarthSpikes());
console.log("Northern Winds hit: " + rollNorthernWinds());
console.log("Lightning Bolt hit: " + rollLightningBolt());


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