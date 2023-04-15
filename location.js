const VarHolder = {
    speed : 0.0
};

const location = {
    
    isCalcMPH: true,
    speed: new GeolocationCoordinates,
    saveMPH: function(){
        
        setTimeout(() => {  VarHolder.speed = location.speed.speed; }, 5000);
            
        
    }, 

    getMPH: function(){
        return VarHolder.speed;
    }
};

location.saveMPH();
console.log("MPH:" + location.getMPH());