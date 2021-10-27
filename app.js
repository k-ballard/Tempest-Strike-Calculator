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

console.log(rollEarthSpikes());