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
    return Math.random() < x
};

function rollNorthernWinds(x) {
    x = northernWinds;
    return Math.random() < x;
};

function rollLightningBolt(x) {
    x = lightningBolt;
    return Math.random() < x
};

console.log("Earth Spike hit: " + rollEarthSpikes());
console.log("Northern Winds hit: " + rollNorthernWinds());
console.log("Lightning Bolt hit: " + rollLightningBolt());