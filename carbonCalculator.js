imputCar = "";
imputMiles = 0;
CO2perMile=0;

calculations()
{
    value
    CO2perMile+=0;
    milesToTrees();
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