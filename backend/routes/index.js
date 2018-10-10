const express = require('express');
const router = express.Router();

router.use('/allUsers', require('./userRoutes'));
router.use('/allLists', require('./listRoutes'));
router.use('/allTodos', require('./todoRoutes'));

module.exports = router;
