const express = require('express');
const path = require('path');


// GET ROUTES FOR APP 
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    
  });