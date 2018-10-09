const Sequelize = require('sequelize');
const { db } = require('./index');

const List = db.define('list', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: `To Do Today: ${new Date().getDate()}/${new Date().getDay()}/${new Date().getFullYear()}`,
  },
});

module.exports = { List };
