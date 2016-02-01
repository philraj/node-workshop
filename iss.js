var request = require("request");
var prompt = require("prompt");

Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
}

//computes 'as the crow flies' distance between two points on a sphere
function haversine (lat1, lat2, lon1, lon2) {
    var R = 6371000; // metres
    var φ1 = lat1.toRadians();
    var φ2 = lat2.toRadians();
    var Δφ = (lat2-lat1).toRadians();
    var Δλ = (lon2-lon1).toRadians();
    
    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
    return R * c;
}

//rounds floating point numbers to 2 decimal places
function truncate (num) {
    return Number(num.toFixed(2));
}



prompt.start();

prompt.get( ['location'], function(err, result) {
    if (err) return console.log("Error! " + err);
    
    //make an http request using user input result.location
    request("https://maps.googleapis.com/maps/api/geocode/json?address=" + result.location,
        function (err, response, body) {
            //if there is no error and the http status code is A-OK...
            if (!err && response.statusCode === 200) {
                var data = JSON.parse(body)
                var userLat = data.results[0].geometry.location.lat;
                var userLong = data.results[0].geometry.location.lng;
                
                console.log("User latitude: " + truncate(userLat));
                console.log("User longitude: " + truncate(userLong));
                
                getDistanceFromISS(userLat, userLong);
            }
            else {
                console.log("There was a problem. \nError: " + err + "\nStatus: " + response.statusCode);
            }
        }
    );    
});

function getDistanceFromISS (userLat, userLong) {
    request("http://api.open-notify.org/iss-now.json", function(err, response, body) {
        if (!err && response.statusCode === 200) {
            var data = JSON.parse(body);
            var issLat = data.iss_position.latitude;
            var issLong = data.iss_position.longitude;
            
            console.log("The position of the ISS is...\nLatitude: " + truncate(issLat) + "\nLongitude: " + truncate(issLong)); 
            
            var distanceFromISS = haversine(userLat, issLat, userLong, issLong);
            console.log("Your distance from the ISS is " + truncate(distanceFromISS/1000) + " kilometers.");
        }
        else {
            console.log("There was a problem. \nError: " + err + "\nStatus: " + response.statusCode);
        }
    });
}
