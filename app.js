//api access key 7c62aa66f43cc8e0aee6396a3fc61be7
const {weatherApi,mapboxApi} = require('./credential.js')
const request = require('request')


const city  = 'Aurangabad'
const url = `http://api.weatherstack.com/current?access_key=${weatherApi}&query='${city}'`
const mapUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoicHJpdGh2aTEwMSIsImEiOiJjbGxmMzAyNWEwbG4yM3BsZDZld29leXRtIn0.D-zG9bza5Yzj1sG04qGSGg`


request({url:url , json:true},(error,response)=>{
    if(error){
        console.log("Unable to Connect to Weather Service");
    }
    else if(response.body.error){
        console.log('Location entered is invalid');
    }
    else{
        const data = response.body
        console.log(`Current temperature is ${data.current.temperature}`)
    }
   
})
request({url:mapUrl , json:true},(error,response)=>{
    if(error){
        console.log('Unable to connect to weather services');
    }
    else if(response.body.features.length == 0){
        console.log('Loaction not Found');
    }
    else{
        const data = response.body
        const lat  = data.features[0].center[0]
        const long = data.features[0].center[1]
        console.log(`latitude is ${lat} and longitude is ${long}`)    
    }
   
})
// GeoCoding
//Address -> lat - long -> weather