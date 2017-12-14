var path = require("path");
var express = require("express");
var router = express.Router();



router.get('/', function(req, res){
	console.log("root");
	res.sendFile(path.join(__dirname, '../public/home.html'));
});

router.get('/view', function(req, res){
	console.log("view");
	res.sendFile(path.join(__dirname, '../public/view.html'));
});

router.get('/make', function(req, res){
	console.log("make");
	res.sendFile(path.join(__dirname, '../public/make.html'));
});

module.exports = router;