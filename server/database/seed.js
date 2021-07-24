// const { Tasks } = require('./index.js');

// const seedMongo = () =>
//   Tasks.deleteMany({})
//     .then(() =>
//       console.log(
//         '\x1b[36m',
//         "\nDatabase (MongoDB): 'tasks' table successfully dropped!"
//       )
//     )
//     .then(() => Tasks.insertMany(require('./fakeData.js')))
//     .then((result) =>
//       console.log(
//         '\x1b[32m',
//         `\nDatabase (MongoDB): 'tasks' successfully seeded ${result.length} entries!\n`,
//         '\x1b[37m'
//       )
//     )
//     .then(process.exit);

// seedMongo();
