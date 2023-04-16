import carbonCalc from './carbonAndTrashCalculator.js';
//import location from './location.js';

var disTrav = document.getElementById("distTrav");
var carbEm = document.getElementById("carbEm");
var main =
{
    carIsRunning: true,
    tempMPS:0.833,
    getTotalMiles:function(){
        return carbonCalc.totalMiles;
    },
    inputCarType: function(){
        if (carbonCalc.inputCar == "2021 Bugatti Chiron Pur Sport")
        {
            carbonCalc.CO2perMile = 893;
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
    totalMilesTravelled: function(){
 
            setInterval(function() {carbonCalc.totalMiles += main.tempMPS;
                                    console.log(carbonCalc.totalMiles);
                                    carbonCalc.CO2 = carbonCalc.totalMiles * carbonCalc.CO2perMile;
                                    disTrav.textContent = carbonCalc.totalMiles;
                                    distTrav.textContent = carbonCalc.CO2; 
                                } , 1000);
            
       
    },

    getTotalCO2:function(){
        return carbonCalc.CO2;
    },

    getrecycleCalculator: function(){
        return carbonCalc.recycleCalculator();
    },

    getMilesToTrees: function(){
        return carbonCalc.milesToTrees();
    },

    getTrash: function(){
        return carbonCalc.poundsCalculations();
    },



    
    
    
}

window.onload = main.totalMilesTravelled();

//set carbonCalc vals (input miles) on loop



//set input car from user value
