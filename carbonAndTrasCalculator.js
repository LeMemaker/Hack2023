imputCar = "";
imputMiles = 0;
CO2perMile=0;



poundsCalculations()
{
    poundsOfTrash = CO2perMile/434.9597;
    return poundsOfTrash;
}

recycleCalculator
{
    CO2= (imputMiles*CO2/Mile);
    paper = (CO2/460);
    glass = (CO2/310);
    plastic = (CO2/1080)*.1
    metals = (CO2/8140)

    return "You can repair your carbon footprint by recylcing: " + paper + " grams of paper, " + glass 
    + " grams of glass, " + plastic + " grams of plastic, " + metals + " grams of metals."
}

milesToTrees()
{
 treeOutput = (imputMiles*CO2perMile)/1814.368;
 return treeOutput;
}

kmToMiCalculator()
{
CO2perMile = CO2perkm*1.60934;
return CO2perMile;
}

