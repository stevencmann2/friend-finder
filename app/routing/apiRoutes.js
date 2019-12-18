// Setting API routes for user


const friendsData = require('../data/friends.js')

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    return res.json(friendsData);
  });

}



// const express = require('express');
// const path = require('path');


// GET ROUTES FOR APP 


// app.post("/api/friends", function (req, res) {

// });