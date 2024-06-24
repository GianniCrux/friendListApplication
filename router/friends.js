const express = require('express');

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};


// GET request: Retrieve all friends
router.get("/",(req,res)=>{

  req.send(JSON.stringify(friends, null, 4));

});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email",(req,res)=>{

  const email = req.params.email;

  req.send(friends[email]);

});


// POST request: Add a new friend
router.post("/",(req,res)=>{

  //Check if mail is provided in the req body 
  if (req.body.email) {
    friends[req.body.email] = {
      "firstName": req.body.firstName,
      "lastName": req.body.lastName,
      "DOB": req.body.DOB,
    };
  }
  //Send a res indicatin user addition
  res.send("The user" + (' ') + (res.body.firstName) + " Has been added!");


});


// PUT request: Update the details of a friend with email id
router.put("/:email", (req, res) => {
  // Update the code here
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
  // Update the code here
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

module.exports=router;
