import browserEnv from 'browser-env';
browserEnv(['navigator']);
const VarHolder = {
    speed : 0.0
};

const location = {
    
    isCalcMPH: true,
    
    currentPos: function(){
        let currentLat = position.coords.latitude;
        let currentLong = position.coords.longitude;
    },

    newPos:function(){
        let newLat = position.coords.latitude;
        let newLong = position.coords.longitude;
    },

    saveMPH: function(){
        navigator.geolocation.getCurrentPosition(location.currentPos);
        setTimeout(() => {  navigator.geolocation.getCurrentPosition(location.newPos); }, 5000);
        
        milesTravelled = Math.acos(Math.sin(currentLat)*Math.sin(newLat)+Math.cos(currentLat)*Math.cos(newLat)*Math.cos(currentLong - newLong)*6371);

        MPH = milesTravelled / 5 / 5 * 360;

        VarHolder.speed = MPH;
    }, 

    getMPH: function(){
        return VarHolder.speed;
    }
};

location.saveMPH();
console.log("MPH:" + location.getMPH());