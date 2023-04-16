



var carbonCalc = {
    inputCar : "2021 Bugatti Chiron Pur Sport",
    totalMiles: 0,
    CO2perMile: 0,
    CO2:0,
    
    poundsCalculations:function(){
        
        var poundsOfTrash = carbonCalc.CO2/434.9597;
        return "You can repair your carbon footprint by picking up: " + Math.ceil(poundsOfTrash) + " pounds of trash.";
    },
    recycleCalculator:function()
    {
       
    var paper = (carbonCalc.CO2/1.01413);
    var glass = (carbonCalc.CO2/0.683433);
    var plastic = (carbonCalc.CO2/2.380992);
    var metals = (carbonCalc.CO2/17.94563);

    return "You can repair your carbon footprint by recycling: " + Math.ceil(paper) + " pounds of paper, or " + Math.ceil(glass) 
    + " pounds of glass, or " + Math.ceil(plastic) + " pounds of plastic, or " + Math.ceil(metals)+ " pounds of metals.";
    },
    milesToTrees: function()
    {
        var treeOutput = (carbonCalc.CO2)/1814.368;
        return "You can repair your carbon footprint by recycling: " + Math.ceil(treeOutput) + " trees.";
    }

    
}
console.log(carbonCalc.CO2perMile);

export default carbonCalc;