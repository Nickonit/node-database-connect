//library imports
let express = require('express');
let bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

//local imports with Destructuring
let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/User');

let app = express();

app.use(bodyParser.json());

//setting up the route
app.post('/todos',(req, res) =>{
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) =>{
        res.send(doc);
    },(e) =>{
        res.status(400).send(e);
    });
});

app.get('/todos',(req,res) =>{
   Todo.find().then((todos) =>{
       res.send({todos});
   },(e) =>{
       res.stack(400).send(e);
   });
});

app.get('/todos/:id',(req, res) =>{
    let id =req.params.id;
    if(!ObjectID.isValid(id)){
       return res.status(404).send();
    }

    Todo.findById(id).then((todo) =>{
       if(!todo){
        return res.status(404).send();
       }
       res.send({todo});
    }).catch((e)=> res.status(400).send());
});

app.listen(3000,() => {
   console.log('server is running on port 3000');
});


module.exports = {app};

// let newTodo = new Todo({
//     text: 'Cook Dinner'
// });
//
//
// newTodo.save().then((doc) => {
//     console.log('Saved Todo', doc);
// },(e) => {
//    console.log('unable to save todo');
// });

// let otherTodo = new Todo({
//     text: 'Feed the cat',
//     completed: true,
//     completeAt: 123
// });
//
// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('unable to save todo');
// });

//
//     let user1 = new User({
//
//     });
//
//     user1.save().then((doc) => {
//         console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//         console.log('unable to save user',e);
//     });