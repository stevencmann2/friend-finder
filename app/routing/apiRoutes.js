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
        //sort array
        let sortArray = [];

        /////// sum function for comparison operator
        function sumArray(arr) {
          let sum = 0;
          for (let s = 0; s < arr.length; s++) {
            sum = sum + arr[s];
          }
          return sum
        }
        //User scores data converted from string to number
        for (let i = 0; i < postedData.scores.length; i++) {
          let userNum = parseInt(postedData.scores[i])
          numberArray.push(userNum)
        };

        // walking backwards down the array to exclude the most recent posted 
        for (let i = friendsData.length - 2; i >= 0; i--) {
          //  console.log(friendsData[i].name + friendsData[i].scores + "   " + numberArray) //shows name/score of compared friend
          let avArray = [];
          for (n = 0; n < friendsData[i].scores.length; n++) {
            let indexComparisonAV = Math.abs(numberArray[n] - friendsData[i].scores[n]);
            // console.log(friendsData[i].name + ` position of${n} in the array `  + 
            //             ' with a value of '+ friendsData[i].scores[n]+
            //             " compared to " + numberArray[n] + " = " + indexComparisonAV)
            avArray.push(indexComparisonAV) // creates new array of absolute values by index
          }

          // defines a new value ---- for every [i] there is total AV 
          let totalDifference = sumArray(avArray);

          if (totalDifference == 0) {
            console.log(`returning ${friendsData[i].name} and ${friendsData[i].photo} `)
            return friendsData[i] //////////// will this stop the code for the entire function?
          } else {
            sortArray.push(totalDifference)
          }
          console.log(totalDifference + friendsData[i].name)
          // console.log(sortArray)




        }
        ////// ATTEMPTING TO SORT ARRAY BY TOTAL DIFFERENCE
        console.log(sortArray)
        sortArray.sort(function (a, b) {
          return a - b
        });

        console.log('did it stop the loop?')


      }

    }

  )
}