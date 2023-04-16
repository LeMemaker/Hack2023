import carbonCalc from './carbonAndTrashCalculator.js';
//import location from './location.js';

var disTrav = document.getElementById("distTrav");
var carbEm = document.getElementById("carbEm");
var time = document.getElementById("time");
var toggle = document.getElementById("carToggle");
var output = document.getElementById("output");
var tree = document.getElementById("tree");
var comSer = document.getElementById("comSer");
var recycle = document.getElementById("recycle");


var main =
{
    carIsRunning: true,
    tempMPS:0.00833,
    timeMov:1,
    toggleDrive:function(){
        if(main.carIsRunning == true){
            main.carIsRunning = false;
            main.tempMPS = 0;
            main.timeMov = 0;
            
        }
        else{
            main.carIsRunning = true;
            main.tempMPS = 0.00833;
            main.timeMov = 1;
            
        }
       
    },
   
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
        
        toggle.addEventListener("click", main.toggleDrive);
        
        tree.addEventListener("click", function() {
            var trees = main.getMilesToTrees()
                    output.innerText = trees;
        });
        
        comSer.addEventListener("click", function() {
            var community = main.getTrash();
            output.innerText = community;
        });
        
        recycle.addEventListener("click", function() {
            var recycle = main.getrecycleCalculator();
            output.innerText = recycle;
        });

        main.inputCarType();
        var timeVal = 0;
        setInterval(function() {carbonCalc.totalMiles += main.tempMPS;
                                    console.log(carbonCalc.totalMiles);
                                    carbonCalc.CO2 = carbonCalc.totalMiles * carbonCalc.CO2perMile;
                                    disTrav.textContent = Math.round(carbonCalc.totalMiles*100)/100 + " miles";
                                    carbEm.textContent = Math.round((carbonCalc.CO2 / 1000) * 100) /100 + " kilograms";
                                    time.textContent = timeVal + " seconds";
                                    timeVal += main.timeMov;

                                } , 1000);
            
     
    },

    getTotalCO2:function(){
        return carbonCalc.CO2;
    },

    getrecycleCalculator: function(){
        if(!main.carIsRunning){
            return carbonCalc.recycleCalculator();
        }
        else
            alert("Stop driving to view details.");
    },

    getMilesToTrees: function(){
        if(!main.carIsRunning)
            return carbonCalc.milesToTrees();
        else
            alert("Stop driving to view details.");
    },

    getTrash: function(){
        if(!main.carIsRunning)
            return carbonCalc.poundsCalculations();
        else
            alert("Stop driving to view details.");
    },



    
    
    
}


window.onload = main.initializeMain();

//set carbonCalc vals (input miles) on loop



//set input car from user value
