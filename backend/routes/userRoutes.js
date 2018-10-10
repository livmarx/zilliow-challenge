const express = require('express');
const router = express.Router();

const { db, List, Todo, User } = require('../db/index');

// Get all users
router.get('/', async function(req, res, next) {
  try {
    const allUsers = await User.findAll();
    console.log('All Users!');
    res.status(200).send(allUsers);
  } catch (error) {
    next(error);
  }
});

// Get particular user by their id
router.get('/:id', async function(req, res, next) {
  try {
    const id = req.params.id;
    const particularUser = await User.findById(id);
    console.log('Particular User!');
    res.status(200).send(particularUser);
  } catch (error) {
    next(error);
  }
});

// Create a user
router.post('/', async function(req, res, next) {
  try {
    const newUser = await User.create(req.body);
    res.status(201).send({ message: 'Made new user! Woo!', newUser: newUser });
  } catch (error) {
    next(error);
  }
});

// Update particular user
router.put('/:id', async function(req, res, next) {
  try {
    const userToUpdate = await User.findById(req.params.id);
    const updtatedUser = await userToUpdate.update(req.body);
    res
      .status(201)
      .send({ message: 'Made new user! Woo!', updtatedUser: updtatedUser });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
