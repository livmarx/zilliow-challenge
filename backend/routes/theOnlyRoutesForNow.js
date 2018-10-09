const express = require('express');
const router = express.Router();

const { db, List, Todo, User } = require('../db/index');

router.get('/allUsers', async function(req, res, next) {
  try {
    const allUsers = await User.findAll();
    console.log('All Users!');
    res.status(200).send(allUsers);
  } catch (error) {
    next(error);
  }
});
