const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/todotoday', {
  logging: false,
});

//Questions:
// 1. Default value of list title
// 2. How am i making tables?
// 3. Seed file format? seed...??

// Defining Models:

const List = db.define('user', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: `To Do Today: ${new Date().getDate()}/${new Date().getDay()}/${new Date().getFullYear()}`,
  },
});

const ListItem = db.define('listItem', {
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
    // isEmail: true, <- why is this not okay?
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

const User = db.define('list', {
  // ID is autogenetrated and we don't need to define in table (?)
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

// Associations

ListItem.belongsTo(List);
List.hasMany(ListItem);

User.hasOne(List);
List.belongsTo(User);

module.exports = { db, List, ListItem, User };
