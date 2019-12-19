// Setting API routes for user


const friendsData = require('../data/friends.js')

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    return res.json(friendsData);
  });


  app.post("/api/friends", function (req, res) {
    friendsData.push(req.body);
    res.json(true)
});

}




// GET ROUTES FOR APP 


