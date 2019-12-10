var User = require('../models/user_models');

module.exports.index = function(req, res) {
    User.find()
    .then(users => {
        res.render('list_users', {
            users: users
        })
    })
};

module.exports.search = function(req, res) {
    var nameToSearch = req.query.inputName;
    User.find({name: nameToSearch})
    .then(users => {
        if (users) {
            res.render('search_users', {
                user: users
            });
        }
    })
    .catch(err => {
        res.render('search_users', {
            message: 'NOT FOUND'
        })
    })
    
};