const Sequelize = require('sequelize');
const db = require('./index');

console.log(db);

const ToDo = db.define('todo', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  expectedTime: {
    type: Sequelize.DECIMAL,
  },
  location: {
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
    },
  },
  details: {
    type: Sequelize.TEXT,
  },
  completed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = { ToDo };
