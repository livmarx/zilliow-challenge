const { db, List, ToDo, User } = require('./backend/db');
db.sync({ force: true }).then(() => {
  console.log('Database synced!!!');
  return User.bulkCreate([
    {
      name: 'Claire',
      email: 'claire@gmail.com',
    },
    {
      name: 'Sarai',
      email: 'sarai@gmail.com',
    },
    {
      name: 'Mary',
      email: 'mary@gmail.com',
    },
    {
      name: 'Steve',
      email: 'steve@gmail.com',
    },
  ])
    .then(() => {
      List.bulkCreate([
        {
          userId: 1,
        },
        {
          userId: 2,
        },
        {
          userId: 3,
        },
        {
          userId: 4,
        },
      ]);
    })
    .then(() => {
      return ToDo.bulkCreate([
        {
          title: 'Walk the dogs',
          expectedTime: 45.0,
          location: 'Franklin Park',
          phone: null,
          email: null,
          details: "Remember to bring bags, treats and Moqi's ball",
          completed: false,
          listId: 2,
        },
        {
          title: 'Drop Sarai off at playdate',
          expectedTime: 20.0,
          location: '800 Center Street, Jamaica Plain, MA 02130',
          phone: '+1-(617)-595-5288',
          details:
            'Child name is Victoria, dad name is John. Know each other from soccer. Even allergic to peanuts',
          completed: false,
          listId: 1,
        },
        {
          title: 'Clean room',
          expectedTime: 60.0,
          completed: false,
          listId: 1,
        },
        {
          title: 'Book doctors appointment for Claire',
          expectedTime: null,
          location: '44 Court Street, Brooklyn, NY 11201',
          phone: '+1-(212) 965-7000',
          details: 'She can only do afternoon appointments after 3pm',
          completed: false,
          listId: 3,
        },
        {
          title: 'Grade exams',
          expectedTime: 90,
          location: null,
          details: 'Try to finish before Sarai and CLaire get home',
          completed: false,
          listId: 4,
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
