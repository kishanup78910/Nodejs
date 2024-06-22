// var fs =require('fs');
// var os =require('os');


// var user =os.userInfo();
// console.log(user);

// fs.appendFile('greeting.txt','Hi ' +user.username + ' !\n',()=>{
//     console.log('File is created')
// });

const notes = require('./notes.js')
var _ =require('lodash');
console.log(notes.age)


var result = notes.addNumber(2,3);
console.log(result)
console.log('server file is reuired')

var data = ["person","person",1,2,2,1,'name','2'];
var filter= _.uniq(data);
console.log(filter);