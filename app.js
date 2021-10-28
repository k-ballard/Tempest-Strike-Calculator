
let earthSpikesProcChance = .2;
let northernWindsProcChance = .2;
let lightningBoltProcChance = .2;

let earthSpikesProc = false;
let northerWindsProc = false;
let lightningBoltProc = false;

function rollEarthSpikes(x) {
    x = earthSpikes;
    return Math.random() < x;
};

function rollNorthernWinds(x) {
    x = northernWinds;
    return Math.random() < x;
};

function rollLightningBolt(x) {
    x = lightningBolt;
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


let hailstorm = 'No';
let chargedStone = 'No';
let tempest = 'No';
let allTertiaryProcs = 'No';
let noTertiaryProcs = 'No';

function tertiaryEffectProc() {
    if(rollEarthSpikes() === true && rollNorthernWinds() === true && rollLightningBolt() === false) {
        return hailstorm = 'Yes';
    } else if (rollEarthSpikes() === false && rollNorthernWinds() === true && rollLightningBolt() === true) {
        return tempest = 'Yes';
    } else if (rollEarthSpikes() === true && rollNorthernWinds() === false && rollLightningBolt() === true) {
        return chargedStone = 'Yes';
    } else if (rollEarthSpikes() === true && rollNorthernWinds() === true && rollLightningBolt() === true) {
        return allSecondaryProcs = 'Yes';
    } else if (rollEarthSpikes() === false && rollNorthernWinds() === false && rollLightningBolt() === false) {
        return noSecondaryProcs = 'Yes';
    } else {
        console.log('Something went wrong...');
    }
};

tertiaryEffectProc();
console.log('Does Hailstorm proc? ' + hailstorm);
console.log('Does Tempest proc? ' + tempest);
console.log('Does Charged Stone proc? ' + chargedStone);
console.log('Do all secondary effects proc? ' + allSecondaryProcs);
console.log('Do none of the secondary effects proc? ' + noSecondaryProcs);