// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new Doc in Users (name: , age:, location)

//   db.collection('Users').insertOne({
//     name: 'Philippe' ,
//     age: 34,
//     location: 'New York'}, (err, result) =>{
//       if (err) { return console.log('Unable to insert User in db.');}
//       console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 1));
//     })

  client.close();
} );
