// Setting HTML routes for user  

const path = require('path');

module.exports =  function (app){

// GET ROUTE FOR APP 
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
// POST ROUTE FOR SURVEY ANSWERS
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.use( function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

}