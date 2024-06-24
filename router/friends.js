const express = require('express');

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};


// GET request: Retrieve all friends
router.get("/",(req,res)=>{

  res.send(JSON.stringify(friends, null, 4));

});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email",(req,res)=>{

  const email = req.params.email;

  res.send(friends[email]);

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

  const email = req.params.email;
  let friend = friends[email];

  if (friend) {
    let DOB = req.body.DOB;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;

    if (DOB) {
      friend["DOB"] = DOB;
    }
    
    if (firstName) {
      friend["firstName"] = firstName;
    }

    if (lastName) {
      friend["lastName"] = lastName;
    }

    friends[email] = friend; //Update friend details in 'friends' object
    res.send(`Friend with the email ${email} updated.`)
  } else {
    //respond if friend with specified email is not found
    res.send("Unable to find friend!");
  }

});


// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {

  const email = req.params.email;

  if (email) {
    //Delete friend from "friends" object based on provided email
    delete friends[email];
    res.send(`Friend with email ${email} deleted.`)
  } else {
    res.send("Unable to find the email of the friend specified");
  }
});

module.exports=router;
