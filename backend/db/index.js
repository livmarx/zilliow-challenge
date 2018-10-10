// Access to database:
const { db } = require('./dbServer');

// Defining Models:
const { ToDo } = require('./ToDo');
const { User } = require('./User');
const { List } = require('./List');

// Associations
ToDo.belongsTo(List);
List.hasMany(ToDo);

User.hasOne(List);
List.belongsTo(User);

module.exports = { db, List, ToDo, User };
