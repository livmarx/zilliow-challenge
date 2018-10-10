const express = require('express');
const router = express.Router();

const { db, List, Todo, User } = require('../db/index');

// Get all users
router.get('/', async function(req, res, next) {
  try {
    const allLists = await List.findAll();
    console.log('All Lists!');
    res.status(200).send(allLists);
  } catch (error) {
    next(error);
  }
});

// Get particular user's list by the user's id
router.get('/:userId', async function(req, res, next) {
  try {
    const id = req.params.userId;
    const particularUsersList = await List.findAll({
      where: {
        userId: id,
      },
    });
    console.log('Particular User List!');
    res.status(200).send(particularUsersList);
  } catch (error) {
    next(error);
  }
});

// // Create a list
router.post('/', async function(req, res, next) {
  try {
    const newList = await List.create(req.body);
    res.status(201).send({ message: 'Made new list! Woo!', newList: newList });
  } catch (error) {
    next(error);
  }
});

// Update particular list
router.put('/:id', async function(req, res, next) {
  try {
    const listToUpdate = await List.findById(req.params.id);
    const updatedList = await listToUpdate.update(req.body);
    res
      .status(201)
      .send({ message: 'Made new user! Woo!', updatedList: updatedList });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
