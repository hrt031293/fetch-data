// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// db.collection("Todos").deleteMany({text:"Eat Lunch"}).then((result)=>{
//     console.log(result);
// });
// db.collection("Users").deleteOne({name:"Sanal"}).then((result)=>{
//     console.log(result);

    db.collection("Users").findOneAndDelete({
        _id:new ObjectID("5a44dee98656ec4430c26f1f")
    }).then((result)=>{
        console.log(result);
        
});
  // db.close();
});
