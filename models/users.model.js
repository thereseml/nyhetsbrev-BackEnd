var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    passWord: String,
    newsLetter: Boolean
})

module.exports = mongoose.model('user', UserSchema);