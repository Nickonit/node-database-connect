// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if(err){
        return console.log('unable to connect to Mongodb server');
    }
    console.log('Connected to Mongodb server');

   //deleteMany
    db.collection('Todos').deleteMany({text: "Learn Node js"}).then((result) => {
       console.log(result);
    });

    //deleteOne
    db.collection('Todos').deleteOne({text: "Learn"}).then((result) => {
        console.log(result);
    });

    //findOneAndDelete

    db.collection('Todos').findOneAndDelete({text: "Learn"}).then((result) => {
        console.log(result);
    });

    //deleteOne from user

     db.collection('User').findOneAndDelete({
        _id: new ObjectID("5af176cf73a9730980543298")
     }).then((result) => {
        console.log(result);
     });



    db.close();
});