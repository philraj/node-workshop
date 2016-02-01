var request = require("request");

request("http://api.open-notify.org/iss-now.json", function (err, response, body) {
    if (!err && response.statusCode === 200) {
        var data = JSON.parse(body);
        
        console.log("The position of the ISS is...\nLatitude: " + data.iss_position.latitude + "\nLongitude: " + data.iss_position.longitude);    
    }
});