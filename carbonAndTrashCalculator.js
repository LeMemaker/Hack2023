



var carbonCalc = {
    inputCar : "2021 Bugatti Chiron Pur Sport",
    totalMiles: 100.0,
    CO2perMile: carbonCalc.inputCarType(),
    CO2:0,
    inputCarType: function(){
        if (carbonCalc.inputCar == "2021 Bugatti Chiron Pur Sport")
        {
            return  893;
        }

        else if(carbonCalc.inputCar=="Average car")
        {
            return 349;
        }

        else if(carbonCalc.inputCar=="2022 Mitsubishi Miragez")
        {
            return 242;
        }
    },
    poundsCalculations:function(){
        
        var poundsOfTrash = carbonCalc.CO2/434.9597;
        return "You can repair your carbon footprint by picking up: " + Math.ceil(poundsOfTrash) + " pounds of trash."
    },
    recycleCalculator:function()
    {
       
    var paper = (carbonCalc.CO2*1.01413);
    var glass = (carbonCalc.CO2*0.683433);
    var plastic = (carbonCalc.CO2*2.380992);
    var metals = (carbonCalc.CO2/17.94563);

    return "You can repair your carbon footprint by recylcing: " + Math.ceil(paper) + " pounds of paper, " + Math.ceil(glass) 
    + " pounds of glass, " + Math.ceil(plastic) + " pounds of plastic, " + Math.ceil(metals)+ " pounds of metals.";
    },
    milesToTrees: function()
    {
        var treeOutput = (carbonCalc.CO2)/1814.368;
        return "You can repair your carbon footprint by recylcing " + Math.ceil(treeOutput) + " trees.";
    }

    
}
console.log(carbonCalc.CO2perMile);

export default carbonCalc;