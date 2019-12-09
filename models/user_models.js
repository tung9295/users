var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    avatar: String,
    phone: String
});

var User = mongoose.model('User', userSchema, 'users');

module.exports  = User;

// "email": "tung9295@gmail.com",
// "password": "tung12345",
// "name": "tung",
// "phone": "0808080808"