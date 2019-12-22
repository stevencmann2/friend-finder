// Setting API routes for user


const friendsData = require('../data/friends.js')

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    return res.json(friendsData);
  });


  app.post("/api/friends", function (req, res) {
      friendsData.push(req.body);

      /////////inital code for response posted comparison//////
      let postedData = req.body;
      /////////MATCHED VARIBALE TO RETURN AS AN OBJECT
      let friendMatch;


      // console.log(friendsData.length)
      if (postedData) {
        //new array of posted scores--- type: num
        let numberArray = [];
       //used only if no exact match 
       let sortArray = [];
        /////// sum function for summing AV 
        function sumArray(arr) {
          let sum = 0;
          for (let s = 0; s < arr.length; s++) {
            sum = sum + arr[s];
          }
          return sum
        }
        
        //string to number ---- user data 
        for (let i = 0; i < postedData.scores.length; i++) {
          let userNum = parseInt(postedData.scores[i])
          numberArray.push(userNum)
        };

        // walking backwards down the array to exclude the most recent posted 
        for (let i = friendsData.length - 2; i >= 0; i--) {
          //////// absolute value array 
          let avArray = [];
          for (n = 0; n < friendsData[i].scores.length; n++) {
            let indexComparisonAV = Math.abs(numberArray[n] - friendsData[i].scores[n]);

            avArray.push(indexComparisonAV)
          }
          //totals avArray 
          let totalDifference = sumArray(avArray);

          ////// IF THERE IS A MATCH BREAK THE LOOOOOP AND RETURN THE OBJECT 
          if (totalDifference === 0) {

            ////// reanmed a variable to export in res.json
            friendMatch = friendsData[i];
      
            ////////////// IF NO MATCH PUSH AV VALUES TO  ARRAY FOR SORTING : Create object to link value to data

          } else {
            sortArray.push({
              friend: friendsData[i],
              difference: totalDifference
            })

          }

        }
        
        //////SORT BASED ON VALUE
        sortArray.sort(function (a, b) {
          return a.difference - b.difference
        });

        //Checking if sortArray is empty 
        
        if (!friendMatch){
          console.log(`RETURNING ${sortArray[0].friend.name}`)
          console.log(`RETURNING ${sortArray[0].friend.photo}`)
          console.log(`RETURNING ${sortArray[0].friend}`)
          friendMatch = sortArray[0].friend
          return res.json(friendMatch)
        }
  
        ////////RETURN CONDITION FOR EXACT MATCH//////
        console.log(`RETURNING ${friendMatch.name}`)
        console.log(`RETURNING ${friendMatch.photo}`)
        console.log(`RETURNING ${friendMatch}`)
        res.json(friendMatch)    
      }
    }
  )
};

