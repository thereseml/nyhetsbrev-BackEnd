var express = require('express');
var router = express.Router();
const userModel = require('../models/users.model')
const cors = require('cors');

router.use(express.json());
router.use(cors());


//hämta användare med id
router.get('/loggin/:id', async function(req, res, next) {
  const usersID = await userModel.findById({_id: req.params.id})
  res.status(200).json(usersID)
});


// Logga in som användare
router.post("/loggin", async (req, res) => {
  const user = await userModel.find()
  const serchUser = user.find((user) => {
    return user.email === req.body.email && user.passWord == req.body.passWord 
  });
    if (serchUser) {
      res.json(serchUser._id)
    } else {

      res.json("false")
    }
});


 // Skapa ny användare
router.post("/add", async (req, res) => {

  const user = await userModel.create(req.body)
  res.status(201).json(user)
});


// ändra prenumeration på användare
router.put("/acceptnews", async (req, res) => {
  const {_id, newsLetter} = req.body;
  const users = await userModel.findById({_id})
  
  users.newsLetter = newsLetter;

  await users.save()
  res.json(users)
})


module.exports = router;
