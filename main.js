import carbonCalc from './carbonAndTrashCalculator.js';
//import location from './location.js';

var disTrav = document.getElementById("distTrav");
var carbEm = document.getElementById("carbEm");
var time = document.getElementById("time");
var toggle = document.getElementById("carToggle");


function toggleDrive(){
    if(this.carIsRunning){
        this.carIsRunning = false;
        this.tempMps = 0;
        toggle.textContent = "Start Driving";
    }
    else{
        this.carIsRunning = true;
        this.tempMPS = 0.00833;
        toggle.textContent = "Stop Driving";
    }
}


var main =
{
    carIsRunning: true,
    tempMPS:0.00833,
   
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
            carbonCalc.CO2perMile =  349;
        }

        else if(carbonCalc.inputCar=="2022 Mitsubishi Miragez")
        {
            carbonCalc.CO2perMile =  242;
        }
    },
    initializeMain: function(){
        toggle.addEventListener("click", toggleDrive);
        main.inputCarType();
        var timeVal = 0;
        setInterval(function() {carbonCalc.totalMiles += main.tempMPS;
                                    console.log(carbonCalc.totalMiles);
                                    carbonCalc.CO2 = carbonCalc.totalMiles * carbonCalc.CO2perMile;
                                    disTrav.textContent = Math.round(carbonCalc.totalMiles*100)/100 + " miles";
                                    carbEm.textContent = Math.round((carbonCalc.CO2 / 1000) * 100) /100 + " kilograms";
                                    time.textContent = timeVal + " seconds";
                                    timeVal += 1;

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


window.onload = main.initializeMain();

//set carbonCalc vals (input miles) on loop



//set input car from user value
