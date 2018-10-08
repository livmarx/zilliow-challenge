// const Sequelize = require('sequelize');
const { db, List, ListItem, User } = require('./backend/db');
db.sync({ force: true }).then(() => {
  console.log('Database synced!!!');
  return User.bulkCreate([
    {
      name: 'Claire',
      email: 'claire@gmail.com',
    },
  ])
    .then(() => {
      List.bulkCreate([
        {
          // title: 'Title 0', // how do i just let it be the detault value
        },
        {
          title: 'Title 1', // how do i just let it be the detault value
        },
        {
          title: 'Title2', // how do i just let it be the detault value
        },
      ]);
    })
    .then(() => {
      return ListItem.bulkCreate([
        {
          title: 'Walk the dogs',
          expectedTime: 45.0,
          location: 'Franklin Park',
          phone: null,
          email: null,
          details: "Remember to bring bags, treats and Moqi's ball",
          completed: false,
        },
        {
          title: 'Drop Sarai off at playdate',
          expectedTime: 20.0,
          location: '800 Center Street, Jamaica Plain, MA 02130',
          phone: '+1-(617)-595-5288',
          details:
            'Child name is Victoria, dad name is John. Know each other from soccer. Even allergic to peanuts',
          completed: false,
        },
        {
          title: 'Book doctors appointment for Claire',
          expectedTime: null,
          location: '44 Court Street, Brooklyn, NY 11201',
          phone: '+1-(212) 965-7000',
          details: 'She can only do afternoon appointments after 3pm',
          completed: false,
        },
      ]);
    })
    .finally(() => {
      db.close();
    })
    .catch(err => {
      console.log(`Oh no! We have an error: ${err}!!!`);
    });
});
// All the below is from tripplanner and i do not understand anyof it!... :(

// look at plantr
// hard code listId in listItem
// impot db and models
// Then sync in seed file
