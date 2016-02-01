var request = require("request");

request("http://api.open-notify.org/iss-now.json", function (err, response, body) {
    if (!err && response.statusCode === 200) {
        var data = JSON.parse(body);
        console.log(JSON.stringify(data));        
    }
});