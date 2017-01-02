var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
	console.log("Get req");
});

app.listen(3000);
console.log("Seema server is running on port 3000");
