// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if(err){
       return console.log('unable to connect to Mongodb server');
    }
    console.log('Connected to Mongodb server');

    // db.collection('Todos').insertOne({
    //     text: 'Hi My Name is Nishant Mishra',
    //     completed: false
    // },(err, result) => {
    //    if(err){
    //        return console.log('unable to insert data', err );
    //    }
    //
    //    console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('User').insertOne({
        name: 'Nishant Mishra',
        age: 25,
        location: 'Greater Noida'
    },(err, result) => {
       if(err){
           return console.log('Unable to insert data');
       }

       console.log(result.ops);
    });


    db.close();
});