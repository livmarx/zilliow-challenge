const db = new Sequelize('postgres://localhost:5432/todotoday', {
  logging: false,
});

//Questions:
// 1. Default value of list title
// 2. How am i making tables? 
// 3. Seed file format? seed.??
// 4. 


// Defining Models:

const List = db.define('user', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: new Date, // can I do this? or Sequelize.NOW? To make the title: const now = new Date ->"Today's Todos: " + now.toDateString() / now.toLocaleDateString());)... maybe i need to make a method that creates a title?
  },
});

const ListItem = db.define('listItem', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  expectedTime: {
    type: Sequelize.DEC,
  },
  location: {
    type: Sequelize.STRING,
  },
  contactInfo: {
    type: Sequelize.STRING,
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


// Associations

ListItem.belongsTo(List)
List.hasMany(ListItem)

module.exports = { db, List, ListItem };




//---------------------------------------------------------------------
// const User = db.define('list', {
  //   // ID is autogenetrated and we don't need to define in table (?)
  //   name: {
  //     type: Sequelize.STRING,
  //     allowNull: false,
  //   },
  //   email: {
  //     type: Sequelize.STRING,
  //     allowNull: false,
  //     // isEmail: true, <- why is this not okay?
  //     validate: {
  //       isEmail: true,
  //     },
  //   },
  //   password:{
  //     type: Sequelize.STRING,
  //     allowNull: false,
  //   },
  //   dateCreated: {
  //     type: Sequelize.DATE, // or Sequelize.NOW?
  //     allowNull: false,
  //     defaultValue: new Date, // can I do this? or Sequelize.NOW?
  //   }
  // });
