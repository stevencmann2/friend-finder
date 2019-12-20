// Setting API routes for user


const friendsData = require('../data/friends.js')

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    return res.json(friendsData);
  });


  app.post("/api/friends", function (req, res) {
      friendsData.push(req.body);
      res.json(true);

      
      /////////inital code for response posted comparison//////
      let postedData = req.body;

      // console.log(friendsData.length)
      if (postedData) {
        //new array of posted scores truned from strings into numbers
        let numberArray = []; 
        //Creates new Array of numbers from posted user data
        for (i = 0; i < postedData.scores.length; i++) {
          let userNum = parseInt(postedData.scores[i])
          numberArray.push(userNum)
        };

        // console.log(numberArray)
        // console.log(friendsData.length -2 )

        // walking backwards down the array to exclude the most recent posted 
        for (i=friendsData.length-2; i >=0 ; i--){
         console.log(friendsData[i].name + friendsData[i].scores + "   " + numberArray) //shows name/score of compared friend
        


          
        }
       

        


      }

    }

  )
};