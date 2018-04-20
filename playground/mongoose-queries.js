const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');

// var id = '55ad7b97024affe25868f5aee';
//
// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid!');
// }
// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todos)=>{
//   console.log('Todo',todos);
// });

// Todo.findById(id).then((todos)=>{
//   if(!todos) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by ID',todos);
// }).catch((e)=> console.log(e));
var id = '5ad0ac625c95da623a4fa792';

User.findById(id).then((user)=>{
  if (!user) {
    return console.log('User ID not found');
  }
  console.log('User by ID: ', user);
}).catch((e)=>{
console.log(e);})
