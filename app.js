const geoCode = require('./utils/geocode.js')
const getForecast = require('./utils/forecast.js')
const yargs = require('yargs')
const city = process.argv[2]

if(!city)return console.log("Please provide location");
//location check
geoCode(city,(error,data)=>{ 
    if(error) return console.log(error);
    getForecast(data.long,data.lat,(error,data)=>{
        console.log(error || data);
    })
})
   
yargs.parse()

