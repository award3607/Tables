var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();
var PORT = 3000;
var htmlRoutes = require("./htmlRoutes.js");

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(htmlRoutes);

app.post("/api/make", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newReservation = req.body;
  var tables = [];
  var waitListArray = [];
  if(tables.length<5){
  	tables.push(newReservation);
  	fs.writeFile('../data/apiTabledata.js', JSON.stringify(newReservation), 'utf-8', function(err) {
			if (err) throw err
			console.log('Done!')
	})
  }
  else{
  	waitListArray.push(newReservation);
  	fs.writeFile('../data/apiWaitingListData.js', JSON.stringify(newReservation), 'utf-8', function(err) {
			if (err) throw err
			console.log('Done!')
	})
  }
  console.log(newReservation);
  res.json(newReservation);
});

app.listen(PORT, function() {
  	console.log("App listening on PORT " + PORT);
});