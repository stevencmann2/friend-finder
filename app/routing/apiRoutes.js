//return the match via res.json(matched object)
// determine way to sort , if not matched
// clean logic 




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
        //////// AV value to be determined 
        // let totalDifference; 
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

            ////////////// IF NO MATCH PUSH AV VALUES TO  ARRAY FOR SORTING  
          } else {
            sortArray.push({
              friend: friendsData[i],
              difference: totalDifference
            })

          }

        }
        console.log(sortArray)
        // return sortArray;

        sortArray.sort(function (a, b) {
          return a.difference - b.difference
        });

        console.log(sortArray)
       
        ////////WITH EXACT MATCH THIS IS WORKING/////////
        // console.log(friendMatch)
        res.json(friendMatch)

         // if (sortArray[0] == totalDifference) {
        // }

      }

    }

  )
};

