// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if(err){
        return console.log('unable to connect to Mongodb server');
    }
    console.log('Connected to Mongodb server');

    // db.collection('Todos').find({
    //     _id: new ObjectID("5af16bb83f78fdcc0d90a66c")
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) =>{
    //     console.log("unable to fetch data", err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) =>{
    //     console.log("unable to fetch data", err);
    // });

    db.collection('User').find({name: 'Nishant Mishra'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) =>{
        console.log("unable to fetch data", err);
    });

    //db.close();
});