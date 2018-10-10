const express = require('express');
const router = express.Router();

const { db, List, ToDo, User } = require('../db/index');

// Get all users
router.get('/', async function(req, res, next) {
  try {
    const allTodos = await ToDo.findAll();
    console.log('All Todos!');
    res.status(200).send(allTodos);
  } catch (error) {
    next(error);
  }
});

// // Get particular todo by it's id
router.get('/:id', async function(req, res, next) {
  try {
    const id = req.params.id;
    const particularUser = await ToDo.findById(id);
    console.log('Particular User!');
    res.status(200).send(particularUser);
  } catch (error) {
    next(error);
  }
});

// Gets all todos for a particular list by listId
router.get('/:listId', async function(req, res, next) {
  try {
    const id = req.params.listId;
    const particularUsersTodo = await ToDo.findAll({
      where: {
        listId: id,
      },
    });
    console.log('Particular User List!');
    res.status(200).send(particularUsersTodo);
  } catch (error) {
    next(error);
  }
});

// // Create a user
// router.post('/', async function(req, res, next) {
//   try {
//     const newUser = await ToDo.create(req.body);
//     res.status(201).send({ message: 'Made new user! Woo!', newUser: newUser });
//   } catch (error) {
//     next(error);
//   }
// });

// // Update particular user
// router.put('/:id', async function(req, res, next) {
//   try {
//     const userToUpdate = await User.findById(req.params.id);
//     const updtatedUser = await userToUpdate.update(req.body);
//     res
//       .status(201)
//       .send({ message: 'Made new user! Woo!', updtatedUser: updtatedUser });
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
