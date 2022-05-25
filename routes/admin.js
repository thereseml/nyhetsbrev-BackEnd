const express = require("express");
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send('<h1>Logga in som admin!</h1>' +
    '<input type="email" placeholder="E-post"/>' +
    '<input type="password" placeholder="Lösenord"/>' +
    '<button>Logga in</button>');
});


router.get('/loggedin', function(req, res, next) {
    res.send('<h1>Du är inloggad!</h1>');
});



module.exports = router;