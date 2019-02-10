const express = require('express');
const path = require('path');
const app = express(); // object with methods; One method is router; express creates a server; app allows us to access the server; app.listen hooks up our server;

const morgan = require('morgan'); //app.use(...) morgan says console.log(what app.use does);
// const { db, List, ToDo, User } = require('./backend/db/index');

// Logger:
app.use(morgan('dev')); // implies '/' ('/', morgan('dev'));

//Body parser:
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// public:
console.log('dirname', __dirname);
app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 8800;

const init = async function() {
  // await db.sync();
  app.listen(PORT, function() {
    console.log(
      ` ***** I'm leisurely listening on pleasent port of ${PORT} *****`
    );
  });
};

init();
