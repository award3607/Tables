var path = require("path");
var express = require("express");
var app = express();

module.exports.routing = function(){

	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname, '../public/home.html'));
	})

	app.get('/view', function(req, res){
		res.sendFile(path.join(__dirname, '../public/view.html'));
	})
	app.get('/make', function(req, res){
		res.sendFile(path.join(__dirname, '../public/make.html'));
	})

};