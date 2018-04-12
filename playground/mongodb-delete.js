// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
// delete many
  // db.collection('Todos').deleteMany({text: "eat lunch"}).then((result) => {
  //   console.log(result);
  // })
// delete one
  // db.collection('Todos').deleteOne({text: "eat lunch"}).then((result) => {
  //   console.log(result);
  // })
// find one and delete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
  //   console.log(result);
  // })
  db.collection('Users').deleteMany({name: 'Philippe'}).then((result) =>{
    console.log(result);
  });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5ace7fd7b1d6eb4ed640c085')}).then((result) =>{
    console.log(result);
  });

client.close();
  }
);
   // client.close();
// } );
