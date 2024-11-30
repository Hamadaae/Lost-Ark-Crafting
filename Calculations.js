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

const conversion = Array(7).fill(false)

for (let i = 0; i < 7 ; i++){
  const rare = materials[i][0];
  const uncommon = materials[i][1];
  conversion[i] = greenTOBlue(uncommon,rare)
}


const orehaRevenue = revenue(Oreha,true)
const abidosRevenue = revenue(Abidos,false)


const craftingPrice = Array(7).fill(0)

for (let i = 0 ; i < 7 ; i++){
  if (i == 0)
  {
      //craftingPrice[i] = oreha(materials[i, 0], materials[i, 1], materials[i, 2], true, false, conversion[i]);
      craftingPrice[i] = oreha(materials[i, 0], materials[i, 1], materials[i, 2], false, conversion[i], false);
  }
  else if (i == 1)
  {
      //craftingPrice[i] = oreha(materials[i, 0], materials[i, 1], materials[i, 2], false, conversion[i], false);
      craftingPrice[i] = oreha(materials[i, 0], materials[i, 1], materials[i, 2], true, false, conversion[i]);
  }
  else
  {
      craftingPrice[i] = abidos(materials[i, 0], materials[i, 1], materials[i, 2], conversion[i]);
  }
}

console.log("Fishing Oreha:");
profit(craftingPrice[0], orehaRevenue);
if (conversion[0]) {
  console.log("Conversion Green to Blue is Better");
}
console.log("");

console.log("Excavating Oreha:");
profit(craftingPrice[1], orehaRevenue);
if (conversion[1]) {
  console.log("Conversion Green to Blue is Better");
}
console.log("");

console.log("Excavating Abidos:");
profit(craftingPrice[2], abidosRevenue);
if (conversion[2]) {
  console.log("Conversion Green to Blue is Better");
}
console.log("");

console.log("Foraging Abidos:");
profit(craftingPrice[3], abidosRevenue);
if (conversion[3]) {
  console.log("Conversion Green to Blue is Better");
}
console.log("");

console.log("Logging Abidos:");
profit(craftingPrice[4], abidosRevenue);
if (conversion[4]) {
  console.log("Conversion Green to Blue is Better");
}
console.log("");

console.log("Mining Abidos:");
profit(craftingPrice[5], abidosRevenue);
if (conversion[5]) {
  console.log("Conversion Green to Blue is Better");
}
console.log("");

console.log("Hunting Abidos:");
profit(craftingPrice[6], abidosRevenue);
if (conversion[6]) {
  console.log("Conversion Green to Blue is Better");
}
console.log("");


