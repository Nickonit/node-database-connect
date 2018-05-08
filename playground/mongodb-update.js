// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if(err){
        return console.log('unable to connect to Mongodb server');
    }
    console.log('Connected to Mongodb server');

    // db.collection('Todos').findOneAndUpdate({
    //    _id: new ObjectID("5af0b1549a6e912d508c8d6f")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    //
    // },{
    //     returnOriginal: false
    // }).then((result) =>{
    //    console.log(result);
    // });

    db.collection('User').findOneAndUpdate({
        _id: new ObjectID("5af1769c6aa06d1cdcee6605")
    }, {
        $set: {
            name: "Nick"
        },
        $inc:{
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) =>{
        console.log(result);
    });

    db.close();
});