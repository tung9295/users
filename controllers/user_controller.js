// var User = require('../models/user_models');
var User = {
    name: "tung",
    age: 18
}
module.exports.index = function(req, res) {
    res.render('index_users', {
        users: User
    })
};