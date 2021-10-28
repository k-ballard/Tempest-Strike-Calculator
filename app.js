let placeholder = 0;
let earthSpikes = .2;
let northernWinds = .2;
let lightningBolt = .2;

/* Don't think this will work
function hit(x,y,z) {
    
};
*/

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

/* Tests for proc rolls */
console.log("Earth Spike hit: " + rollEarthSpikes());
console.log("Northern Winds hit: " + rollNorthernWinds());
console.log("Lightning Bolt hit: " + rollLightningBolt());


let hailstorm = false;
let chargedStone = false;
let tempest = false;
let allSecondaryProcs = false;
let noSecondaryProcs = false;

function secondaryEffectProc() {
    if(rollEarthSpikes() == true && rollNorthernWinds() == true && rollLightningBolt() == false) {
        return hailstorm = true;
    } else if (rollEarthSpikes() == false && rollNorthernWinds() == true && rollLightningBolt() == true) {
        return tempest = true;
    } else if (rollEarthSpikes() == true && rollNorthernWinds() == false && rollLightningBolt() == true) {
        return chargedStone = true;
    } else if (rollEarthSpikes() == true && rollNorthernWinds() == true && rollLightningBolt() == true) {
        return allSecondaryProcs = true;
    } else if (rollEarthSpikes() == false && rollNorthernWinds() == false && rollLightningBolt() == false) {
        return noSecondaryProcs = true;
    } else {
        console.log('Something went wrong...');
    }
};

secondaryEffectProc();
console.log('Does Hailstorm proc? ' + hailstorm);
console.log('Does Tempest proc? ' + tempest);
console.log('Does Charged Stone proc? ' + chargedStone);
console.log('Do all secondary effects proc? ' + allSecondaryProcs);
console.log('Do none of the secondary effects proc? ' + noSecondaryProcs);