const carbonCalc = {
    inputCar : "",
    inputMiles: 0,
    CO2perMile: 0,
    poundsCalculations:function(){
        CO2= (imputMiles*CO2perMile);
        poundsOfTrash = CO2/434.9597;
        return "You can repair your carbon footprint by picking up: " + poundsOfTrash + " pounds of trash."
    },
    recycleCalculator:function()
    {
        CO2= (imputMiles*CO2perMile);
    paper = (CO2*1.01413);
    glass = (CO2*0.683433);
    plastic = (CO2*2.380992);
    metals = (CO2/17.94563);

    return "You can repair your carbon footprint by recylcing: " + paper + " pounds of paper, " + glass 
    + " pounds of glass, " + plastic + " pounds of plastic, " + metals + " pounds of metals.";
    },
    milesToTrees: function()
    {
        CO2= (imputMiles*CO2perMile);
        treeOutput = (CO2)/1814.368;
        return "You can repair your carbon footprint by recylcing" + treeOutput + " trees.";
    }
    
}
console.log(carbonCalc.CO2perMile);

