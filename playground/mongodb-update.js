// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5ace80204fdb7c4f07555b8a')
  }, {
    $inc: { age: 1}
  },  {
    returnOriginal: false
  }  ).then( (result) => {
    console.log(result);
  });
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5acf575fa3f52cb11c4e5388')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // },  {
  //   returnOriginal: false
  // }  ).then( (result) => {
  //   console.log(result);
  // });



client.close();
  }
);
   // client.close();
// } );
