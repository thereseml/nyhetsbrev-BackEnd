const express = require("express");
const router = express.Router();
const userModel = require('../models/users.model')
const cors = require('cors');

router.use(express.json());
router.use(cors());

let loggin = false; 

router.get('/', (req, res,) => {

    loggin = false;

    let loginform = `<form action="admin/loggin" method="post">
    <h1>Logga in som admin!</h1>
    <div>
        <input type="text" name="username" placeholder="Användarnamn"/>
    </div>
    <button type="submit">Logga in</button></form>`

    res.send(loginform)
});


 // Logga in som admin
router.post("/loggin", function (req, res) {

   if (req.body.username = "admin") {
      res.redirect("/admin/loggedin")
   }

});


// Inloggad som admin
router.get('/loggedin', async (req, res,) => {

        let Users = await userModel.find();
        let loggOut = '<a href="/admin">Logga ut</a>'
        let prenumeranter = `<a href="/admin/trueUsers">Visa alla som prenumererar</a>`
        let printUsers = '<div><h2>Alla avändare</h2></div>'

        for (user in Users) {
            printUsers += '<div>' + '<h3>' + Users[user].firstName + ' ' + Users[user].lastName + '</h3>' + Users[user].email + '<p>Prenumererar:' + ' ' + Users[user].newsLetter + '</p></div>';
        
        }

        res.send( printUsers + loggOut + ' ' + prenumeranter)

});


router.get('/trueUsers', async (req, res,) => {

    let Users = await userModel.find();
    let loggOut = '<a href="/admin">Logga ut</a>'
    let allUsers = `<a href="/admin/loggedin">Visa alla som prenumererar</a>`
    let showList = `<h3>Alla som prenumererar:</h3>`


        for (let i = 0; i < Users.length; i++) {
            if (Users[i].newsLetter) {
            printTrueUsers = '<div>' + '<h3>' + Users[i].firstName + ' ' + Users[i].lastName + '</h3>' + Users[i].email + '<p>Prenumererar:' + ' ' + Users[i].newsLetter + '</p></div>';
            showList += printTrueUsers;
            }
        }



    res.send(showList + loggOut + " " + allUsers)
});

module.exports = router;