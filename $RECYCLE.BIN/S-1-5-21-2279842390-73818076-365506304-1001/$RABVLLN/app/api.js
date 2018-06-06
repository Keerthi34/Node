var express = require(“express”);
module.exports = function(app){

//Main Route Sample
 app.get(‘/’, function (req, res) {
 res.send(‘Hello Microservice API !’);
 });

};
