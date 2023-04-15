import carbonCalc from './carbonAndTrashCalculator.js';
//import location from './location.js';



var main =
{
    carIsRunning: true,
    tempMilesPer5Sec:0.416,
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
    totalMilesTravelled: function(time){
 
            setInterval(function() {carbonCalc.totalMiles += main.tempMilesPer5Sec;
                                    console.log(carbonCalc.totalMiles);
                                    carbonCalc.CO2 *= carbonCalc.CO2perMile } , time);
            
       
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

main.totalMilesTravelled(50000);

console.log(main.getrecycleCalculator());
console.log(main.getMilesToTrees());
console.log(main.getTrash());
//set carbonCalc vals (input miles) on loop



//set input car from user value
