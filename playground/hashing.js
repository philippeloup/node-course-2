


const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'abc123!';
//
// bcrypt.genSalt(10, (err,salt) => {
//   bcrypt.hash(password,salt,(err, hash) =>{
//     console.log(hash);
//   })
// });

var hashedPassword = '$2a$10$q4C6uIHhEi2WfuydzHOSYONjI7lmoapIvQGdSoa48nAi/5KUx2Fwa'

bcrypt.compare(password, hashedPassword,(err,res) => {
  console.log(res);
})
// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, process.env.JWT_SECRET);
// console.log(token);
// var decode = jwt.verify(token,process.env.JWT_SECRET);
// console.log('Decoded: ', decode);


//
// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//   id: 4
// };
// var token = {
//   data,
//   hash:SHA256(JSON.stringify(data)+ 'somesecret').toString()
// };
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data)+'somesecret').toString();
//
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust');
// }
