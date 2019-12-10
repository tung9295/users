const express = require('express');
const app = express();
const port = 3000;

var userRoutes = require('./routers/user_router');

require('dotenv').config();

var pug = require('pug');

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL)
// var User = require('./models/user_models');

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('index');
});

app.use('/users', userRoutes);

// app.get('/users/list', function(req, res) {
//     res.render('list_users');
// });

// app.get('/users/create', function(req, res) {
//     res.render('create_user');
// });

// app.get('/users/delete', function(req, res) {
//     res.render('delete_user');
// });

app.listen(port, function() {
    console.log('App listening on port ' + port);
});