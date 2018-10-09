const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/todotoday', {
  logging: false,
});

// Defining Models:

// const { ToDo } = require('./ToDo');
// const { User } = require('./User');
// const { List } = require('./List');

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

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
});

const List = db.define('list', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: `To Do Today: ${new Date().getDate()}/${new Date().getDay()}/${new Date().getFullYear()}`,
  },
});

// Associations

ToDo.belongsTo(List);
List.hasMany(ToDo);

User.hasOne(List);
List.belongsTo(User);

module.exports = { db, List, ToDo, User };
