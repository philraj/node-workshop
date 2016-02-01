var request = require("request");

request("http://api.open-notify.org/iss-now.json", function (err, response, body) {
    if (!err && response.statusCode === 200) {
        var data = JSON.parse(body);
        var lat = Number( data.iss_position.latitude.toFixed(2) );
        var long = Number( data.iss_position.longitude.toFixed(2) );
        
        console.log("The position of the ISS is...\nLatitude: " + lat + "\nLongitude: " + long);    
    }
});