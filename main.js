import carbonCalc from './carbonAndTrashCalculator.js';
//import location from './location.js';



var main =
{
    carIsRunning: true,
    tempMilesPer5Sec:0.416,
    getTotalMiles:function(){
        return carbonCalc.totalMiles;
    },

    totalMilesTravelled: function(){
 
            setInterval(function() {carbonCalc.totalMiles += main.tempMilesPer5Sec;
                                    console.log(carbonCalc.totalMiles);
                                    carbonCalc.CO2 *= carbonCalc.CO2perMile } , 5000);
            
       
    },

    getTotalCO2:function(){
        return carbonCalc.CO2;
    },

    getrecycleCalculator: function(){
        return carbonCalc.recycleCalculator;
    },

    getMilesToTrees: function(){
        return carbonCalc.milesToTrees;
    },

    getTrash: function(){
        return carbonCalc.poundsCalculations;
    },



    inputCarType: function(){
        if (carbonCalc.car== "2021 Bugatti Chiron Pur Sport")
        {
            carbonCalc.CO2perMile = 893;
        }

        else if(carbonCalc.car=="Average car")
        {
            carbonCalc.CO2perMile = 349;
        }

        else if(car=="2022 Mitsubishi Miragez")
        {
            carbonCalc.CO2perMile = 242;
        }
    }
    
    
}

main.totalMilesTravelled();

//set carbonCalc vals (input miles) on loop



//set input car from user value
