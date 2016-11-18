'use strict';

const express      = require('express');
const app          = express();
const port         = +process.env.PORT || 8080;
const path         = require('path');
const mongoose     = require('mongoose');
const morgan       = require('morgan');
const bodyParser   = require('body-parser'); // parsing middleware
const http         = require('http');
const expresJWT    = require('express-jwt');
const jwt          = require('jsonwebtoken');


/*
mongoose.connect('mongodb://localhost:27017/my_todo');


let Todo = require('./db/todoSchema');
let User = require('./db/userSchema');
//let Record = require('./db/recordSchema');
*/



app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
//app.use(expresJWT({ secret: 'myfantasticwebapp' }).unless({ path: ['./', './home'] }))
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json




// configure our app to handle CORS requests
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});



// ROUTES TO OUR PAGES

app
  .get('/', function(req, res) {
    res.sendFile(path.join(`${__dirname}/public/index.html`));
  })




//API router

var apiRouter = express.Router();



// todos

apiRouter.route('/todos')

.post(function(req, res) {
  // create a new instance of the Event model
  var todo = new Todo();

  todo.title = req.body.title;



//  save the user and check for errors
  todo.save(function(err) {
    if (err) {
     // duplicate entry
     if (err.code == 11000)
       return res.json({ success: false, message: 'A user with that username already exists. '});
     else
       return res.send(err);
     }
     res.json({ message: 'Record created!' });
  });

})

.get(function(req, res) {

  Todo
    .find({})
    .exec(function(err, todos) {
      if(err) res.send(err);
      res.json(todos);
    });
});

apiRouter.route('/todos/:title')
  .get(function(req, res) {
    Todo.findOne({

      'title': req.params.title

    }, function (err, todo) {
      if (err) res.send(err);
      res.json(todo);
    });
  });





// USER


apiRouter.route('/users')

.post(function(req, res) {
  // create a new instance of the Event model
  let user = new User();

  user.username = req.body.username;
  user.email = req.body.email;
  user.password = req.body.password;
  user.todos = req.body.todos;
  user.done = req.body.done;
  user.notifications = req.body.notifications;



//  save the user and check for errors
  user.save(function(err) {
    if (err) {
     // duplicate entry
     if (err.code == 11000)
       return res.json({ success: false, message: 'A user with that username already exists. '});
     else
       return res.send(err);
     }
     res.json({ message: 'Record created!' });
  });

})

.get(function(req, res) {

  User
    .find({})
    .exec(function(err, users) {
      if(err) res.send(err);
      res.json(users);
    });
});

apiRouter.route('/users/:email')
  .get(function(req, res) {
    Todo.findOne({

      'email': req.params.username

    }, function (err, user) {
      if (err) res.send(err);
      res.json(user);
    });
  });





  apiRouter.get('/', function(req, res) {
    res.json({ message: 'Welcome to our api!' });
  });

  app.use('/api', apiRouter);


// START THE SERVER
http
  .createServer(app).listen(port)
  .on('error', function(error){
     console.log("Error: \n" + error.message);
     console.log(error.stack);
  });

console.log(`Server is running on port ${port}`);
