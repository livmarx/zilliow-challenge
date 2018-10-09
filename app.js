const Sequlize = require('sequelize');
const express = require('express');
// const path = require('path');
const app = express(); // object with methods; One method is router; express creates a server; app allows us to access the server; app.listen hooks up our server;
const morgan = require('morgan'); //app.use(...) morgan says console.log(what app.use does);
const { db, List, ToDo, User } = require('./backend/db/index');

// Logger:
app.use(morgan('dev')); // implies '/' ('/', morgan('dev'));

//Body parser:
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.get('/', async function(req, res, next) {
  try {
    console.log(
      'Hazzah! We have made successfully made a GET request through our foraged slash route!'
    );
    res.send(
      'Hazzah! We have made successfully made a GET request through our foraged slash route!'
    );
  } catch (err) {
    next(err);
  }
});

app.get('/api/allUsers', async function(req, res, next) {
  try {
    const allUsers = await User.findAll();
    console.log('All Users!');
    res.status(200).send(allUsers);
  } catch (error) {
    next(error);
  }
});

const PORT = 8080;

const init = async function() {
  // await db.sync();
  app.listen(PORT, function() {
    console.log(`I'm leisurely listening on pleasent port of ${PORT}`);
  });
};

init();
