var express = require('express');
var adminRouter = require('./routes/admin');
var usersRouter = require('./routes/users');
var mongoose = require('mongoose')
var app = express();
var port = 5000


const options = {useNewUrlParser: true, useUnifiedTopology: true}
mongoose.connect('mongodb://localhost:27017/newsletter', options, (error) => {
   if (error) {
       console.log("Något blev fel " + error);
   } else {
       console.log("Databasen fungerar!");
   }
})


app.use(express.json());
app.use('/admin', adminRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log("Servern kört på port " + port);
})

module.exports = app;
