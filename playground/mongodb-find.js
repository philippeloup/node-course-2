// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
// delete many
  db.collection('Todos').deleteMany({text: "eat lunch"}).then((result) => {
    console.log(result);
  })

  }, (err) =>{
    console.log('error', err);
  }
)

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
//   if (err) {
//     return console.log('Unable to connect to MongoDB server');
//   }
//   console.log('Connected to MongoDB server');
//   const db = client.db('TodoApp');
//   db.collection('Users').find({"name" : 'Philippe'}).toArray().then( (user) => {
//     console.log(`Users :`);
//     console.log(JSON.stringify(user,undefined,2));
//   }, (err) =>{
//     console.log('error', err);
//   }
// )

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
//   if (err) {
//     return console.log('Unable to connect to MongoDB server');
//   }
//   console.log('Connected to MongoDB server');
//   const db = client.db('TodoApp');
//   db.collection('Todos').find().count().then( (count) => {
//     console.log(`Todos count: ${count}`);
//   }, (err) =>{
//     console.log('error', err);
//   }
// )
   client.close();
} );
