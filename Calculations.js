const {profit, revenue, abidos, oreha, greenTOBlue} = require('./Functions')

const Abidos = 77
const Oreha = 52

// Excavating
let abidosRelic = 850 / 100;
let orehaRelic = 800 / 100;
let rareRelic = 120 / 100;
let ancientRelic = 58 / 100;

// Fishing 
let orehaSolarCarp = 843 / 100;
let abidosSolarCarp = 800 / 100;
let redFleshFish = 121 / 100;
let fish = 60 / 100;

// Foraging
let abidosWildFlower = 800 / 100;
let shyWildFlower = 126 / 100;
let wildFlower = 64 / 100;

// Logging 
let abidosTimber = 799 / 100;
let tenderTimber = 117 / 100;
let Timber = 58 / 100;

// Mining
let abidosIronOre = 825 / 100;
let heavyIronOre = 118 / 100;
let ironOre = 63 / 100;

//Hunting
let abidosMeat = 876 / 100;
let orehaMeat = 740 / 100;
let treatedMeat = 127 / 100;
let thickMeat = 67 / 100;

const orehaFishing = [orehaSolarCarp, redFleshFish, fish];
const orehaExcavation = [orehaRelic, rareRelic, ancientRelic];
const abidosExcavation = [abidosRelic, rareRelic, ancientRelic];
const abidosForaging = [abidosWildFlower, shyWildFlower, wildFlower];
const abidosLogging = [abidosTimber, tenderTimber, Timber];
const abidosMining = [abidosIronOre, heavyIronOre, ironOre];
const abidosHunting = [abidosMeat, treatedMeat, thickMeat];


const materials = Array.from({length: 7}, () => Array(3),fill(0))

for (let i = 0; i < 3; i++) {
  materials[0][i] = orehaFishing[i];
  materials[1][i] = orehaExcavation[i];
  materials[2][i] = abidosExcavation[i];
  materials[3][i] = abidosForaging[i];
  materials[4][i] = abidosLogging[i];
  materials[5][i] = abidosMining[i];
  materials[6][i] = abidosHunting[i];
}


