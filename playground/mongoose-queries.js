const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

let todoid = '5af4cc02d6b8968825ab86e0';
 //let userid = '5af2bb143c7e99d4094a9fbb';

if(!ObjectID.isValid(todoid && userid)){
    console.log('ID not valid');
}

Todo.find({
    _id: todoid
}).then((todos) =>{
  console.log('todos', todos);
});

Todo.findOne({
    _id: todoid
}).then((todo) =>{
    console.log('todo', todo);
});

Todo.findById(todoid).then((todo) =>{
    if(!todo){
        return console.log('Id not Find');
    }
    console.log('todo by id', todo);
}).catch((e) =>console.log(e));

// User.findById(userid).then((user) =>{
//     if(!user) {
//         return console.log('ID not found');
//     }
//
//     console.log('User ID', user);
// }).catch((e) => console.log(e));