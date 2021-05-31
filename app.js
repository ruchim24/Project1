var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


    
app.get("/", function(req, res){
    res.render("home");
});

app.get("/cards", function(req, res){
    res.render("cards");
});



app.listen(3000, function(){
   console.log("The YelpCamp Server Has Started!");
});
