function profit(production, revenue){
  const profit = "Profitable"
  const loss = "Not Profitable"
  
  let result = revenue - production

  if(result > 0){
    console.log(`${profit}  Value of profit is :  ${result}  In 40 Crafts would be :  ${result*40}`)
  }
  else{
    console.log(`${loss}  Value of loss is :  ${result}  In 40 Crafts would be :  ${result*40}`)
  }
}

function revenue(value, oreha){
  let itemValue;
  if(oreha){
    itemValue = (Math.floor(value * 0.95) * 15)
  }
  else{
    itemValue = (Math.floor(value * 0.95) * 10)
  }
  return itemValue
}


function abidos(rare, uncommon, common, greenToBlue){
  const cost = 368
  let production
  if(greenToBlue){
    production = Math.floor((33 * uncommon * 6.25) + (45*uncommon) + (86 * common) + cost) 
  }
  else{
    production = Math.floor((33 * rare) + (45*uncommon) + (86 * common) + cost) 
  }
  return production
}

function oreha(rare,uncommon,common,excavating,Fish_Gr_Bl,Exca_Gr_Bl){
  const cost = 261
  let production
  if ((excavating && Exca_Gr_Bl))
  {
    production = Math.floor((52 * uncommon * 6.25) + (51 * uncommon) + (107 * common) + cost);
  }
  else if ((!excavating && Fish_Gr_Bl))
  {
    production = Math.floor((52 * uncommon * 6.25) + (69 * uncommon) + (142 * common) + cost);
  }
  else if (excavating)
  {
    production = Math.floor((52 * rare) + (51 * uncommon) + (107 * common) + cost);
  }
  else if (!excavating)
  {
    production = Math.floor((52 * rare) + (69 * uncommon) + (142 * common) + cost);
  } 
    return production
}

function greenTOBlue(green,blue){
  let value = green * 6.25
  return value < blue
}

module.exports = {profit, revenue, abidos, oreha, greenTOBlue}
