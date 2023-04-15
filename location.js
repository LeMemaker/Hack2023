import browserEnv from 'browser-env';
browserEnv(['navigator']);

import Geolocation  from '@react-native-community/geolocation';

import Varholder from Varholder;

const VarHolder = {
    speed : 0.0
};

const location = {
    
    isCalcMPH: true,
    currentLat: 0.0,
    currentLong:0.0,
    newLat:0.0,
    newLong:0.0,
    
    currentPos: function(){
        location.currentLat = position.coords.latitude;
        location.currentLong = position.coords.longitude;
    },

    newPos:function(){
        location.newLat = position.coords.latitude;
        location.newLong = position.coords.longitude;
    },

    saveMPH: function(){
        Geolocation.getCurrentPosition(location.currentPos);
        setTimeout(() => {  Geolocation.getCurrentPosition(location.newPos); }, 5000);
        
        var milesTravelled = Math.acos(Math.sin(location.currentLat)*Math.sin(location.newLat)+Math.cos(location.currentLat)*Math.cos(location.newLat)*Math.cos(location.currentLong - location.newLong)*6371);

        var MPH = milesTravelled / 5 / 5 * 360;

        VarHolder.speed = MPH;
    }, 

    getMPH: function(){
        return VarHolder.speed;
    }
};

location.saveMPH();
console.log("MPH:" + location.getMPH());